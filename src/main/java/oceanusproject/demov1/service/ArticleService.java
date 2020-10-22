package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.ArticleDTO;
import oceanusproject.demov1.dto.SectionDTO;
import oceanusproject.demov1.model.*;
import oceanusproject.demov1.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private SectionRepository sectionRepository;

    @Autowired
    private QuizSectionArticleRepository quizSectionArticleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserArticleRepository userArticleRepository;

    @Autowired
    private AchievementService achievementService;

    @Autowired
    private GameRepository gameRepository;

    // this method is used to get the text content of all the sections of one article
    public ArticleDTO getArticle(long articleId) {
        ArticleDTO articleDTO = new ArticleDTO();
        Article article = articleRepository.findByArticleId(articleId);
        articleDTO.setArticleId(articleId);
        articleDTO.setArticleTitle(article.getArticleTitle());
        Game game = gameRepository.findByArticle(article);
        if (game != null) {
            String gameAPI = null;
            int gameId = game.getGameId();
            switch (gameId) {
                case 1 -> gameAPI = "/sharkvsrubbish";
                case 2 -> gameAPI = "/suziestoosies";
                case 3 -> gameAPI = "/cloggedmemory";
            }
            articleDTO.setGameAPI(gameAPI);
        }

        List<Section> sections = sectionRepository.findByArticle(article);
        List<SectionDTO> sectionDTOList = new ArrayList<>();
        for (Section s : sections) {
            SectionDTO newSectionDTO = new SectionDTO();
            newSectionDTO.setSectionId(s.getSectionId());
            newSectionDTO.setSectionSequenceNumber(s.getSectionSequenceNumber());
            newSectionDTO.setSectionHeader(s.getSectionHeader());
            newSectionDTO.setSectionText(s.getSectionText());
            newSectionDTO.setHasQuiz(s.isHasQuiz());
            newSectionDTO.setImageUrl(s.getImageUrl());
            newSectionDTO.setImageAlignment(s.getImageAlignment());
            sectionDTOList.add(newSectionDTO);
        }

        articleDTO.setSectionDTOList(sectionDTOList);
        return articleDTO;
    }

    // this method will return a particular section
    public SectionDTO getSection(long sectionId) {
        SectionDTO sectionDTO = new SectionDTO();
        Section section = sectionRepository.findBySectionId(sectionId);
        sectionDTO.setSectionId(section.getSectionId());
        sectionDTO.setSectionSequenceNumber(section.getSectionSequenceNumber());
        sectionDTO.setSectionHeader(section.getSectionHeader());
        sectionDTO.setSectionText(section.getSectionText());
        sectionDTO.setHasQuiz(section.isHasQuiz());
        sectionDTO.setImageUrl(section.getImageUrl());
        sectionDTO.setImageAlignment(section.getImageAlignment());

        return sectionDTO;
    }

    public List<Long> getArticleIdWhichHasQuizzes() {
        return quizSectionArticleRepository.findDistinctArticleId();
    }

    public int getNumberOfQuizzesForArticle(long articleId) {
        return quizSectionArticleRepository.countByArticleId(articleId);
    }

    public void updateArticleReadingTimes(long articleId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            GeneralUser user = userRepository.findByUsername(currentPrincipalName);
            Article article = articleRepository.findByArticleId(articleId);

            UserArticleRecord userArticle = userArticleRepository.findByGeneralUserAndArticle(user, article);
            if (userArticle == null) {
                userArticle = new UserArticleRecord();
            }
            userArticle.setArticle(article);
            userArticle.setGeneralUser(user);
            userArticle.setReadTimes(userArticle.getReadTimes() + 1);
            userArticleRepository.save(userArticle);

            achievementService.updateArticleAchievement(user);
        }
    }

    public long countArticle() {
        return articleRepository.count();
    }
}
