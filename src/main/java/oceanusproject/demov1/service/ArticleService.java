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

/**
 * the services about article
 */
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

    /**
     * generate an ArticleDTO by article id
     * @param articleId the article id identify a article
     * @return an ArticleDTO
     */
    public ArticleDTO getArticle(long articleId) {
        ArticleDTO articleDTO = new ArticleDTO();
        Article article = articleRepository.findByArticleId(articleId);
        articleDTO.setArticleId(articleId);
        articleDTO.setArticleTitle(article.getArticleTitle());

        // set the game API URL if this article has game
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


    /**
     * generate a SectionDTO by section id
     * @param sectionId the section id identify a section
     * @return a SectionDTO
     */
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

    /**
     * get a list of all the article id which identify the articles that have quizzes
     * @return the list of all the article id which identify the articles that have quizzes
     */
    public List<Long> getArticleIdWhichHasQuizzes() {
        return quizSectionArticleRepository.findDistinctArticleId();
    }

    /**
     * get the number of quizzes of an article
     * @param articleId the article id that identify an article
     * @return the number of quizzes of the article
     */
    public int getNumberOfQuizzesForArticle(long articleId) {
        return quizSectionArticleRepository.countByArticleId(articleId);
    }

    /**
     * update the reading times of an article by article id
     * @param articleId the article id that identify an article
     */
    public void updateArticleReadingTimes(long articleId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            GeneralUser user = userRepository.findByUsername(currentPrincipalName);
            Article article = articleRepository.findByArticleId(articleId);

            // if the current logged-in user has not read this article,
            // a reading record will be generated
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

    /**
     * count the number of articles
     * @return the number of articles
     */
    public long countArticle() {
        return articleRepository.count();
    }
}
