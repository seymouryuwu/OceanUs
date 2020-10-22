package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.*;
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
public class QuizService {
    @Autowired
    private SectionRepository sectionRepository;

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private QuizOptionRepository quizOptionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserQuizRecordRepository userQuizRecordRepository;

    @Autowired
    private UserQuizArticleRepository userQuizArticleRepository;

    @Autowired
    private QuizSectionArticleRepository quizSectionArticleRepository;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private UserGameRecordRepository userGameRecordRepository;

    @Autowired
    private AchievementService achievementService;

    @Autowired
    private ArticleService articleService;

    public SectionQuizDTO getSectionQuiz(long sectionId) {
        SectionQuizDTO sectionQuizDTO = new SectionQuizDTO();
        sectionQuizDTO.setSectionId(sectionId);
        Section section = sectionRepository.findBySectionId(sectionId);

        List<Quiz> sectionQuizList = quizRepository.findBySection(section);
        List<QuizDTO> sectionQuizDTOList = new ArrayList<>();
        for (Quiz q : sectionQuizList) {
            QuizDTO newQuizDTO = new QuizDTO();
            newQuizDTO.setQuizId(q.getQuizId());
            newQuizDTO.setQuizQuestion(q.getQuizQuestion());
            newQuizDTO.setQuizOptionDTOList(getOptionDTO(q));
            sectionQuizDTOList.add(newQuizDTO);
        }

        sectionQuizDTO.setSectionQuizDTOList(sectionQuizDTOList);
        return sectionQuizDTO;
    }

    public QuizDTO getQuiz(long quizId) {
        QuizDTO newQuizDTO = new QuizDTO();
        Quiz quiz = quizRepository.findByQuizId(quizId);
        newQuizDTO.setQuizId(quiz.getQuizId());
        newQuizDTO.setQuizQuestion(quiz.getQuizQuestion());
        newQuizDTO.setQuizOptionDTOList(getOptionDTO(quiz));
        return newQuizDTO;
    }

    // this method will get the options of one quiz
    private List<QuizOptionDTO> getOptionDTO(Quiz quiz) {
        List<QuizOptionDTO> quizOptionDTOList = new ArrayList<>();
        List<QuizOption> quizOptionList = quizOptionRepository.findByQuiz(quiz);
        for (QuizOption quizOption : quizOptionList) {
            QuizOptionDTO newQuizOptionDTO = new QuizOptionDTO();
            newQuizOptionDTO.setQuizOptionId(quizOption.getQuizOptionId());
            newQuizOptionDTO.setQuizOptionText(quizOption.getQuizOptionText());
            quizOptionDTOList.add(newQuizOptionDTO);
        }
        return quizOptionDTOList;
    }

    public AnswerDTO examAnswer(long submittedQuizOptionId) {
        AnswerDTO answerDTO = new AnswerDTO();
        QuizOption submittedQuizOption =  quizOptionRepository.findByQuizOptionId(submittedQuizOptionId);
        Quiz quiz = submittedQuizOption.getQuiz();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            GeneralUser user = userRepository.findByUsername(currentPrincipalName);

            UserQuizRecord userQuizRecord = userQuizRecordRepository.findByGeneralUserAndQuiz(user, quiz);
            if (userQuizRecord == null) {
                userQuizRecord = new UserQuizRecord();
            }
            userQuizRecord.setAnswerResult(submittedQuizOption.isAnswer());
            userQuizRecord.setGeneralUser(user);
            userQuizRecord.setQuiz(quiz);
            userQuizRecordRepository.save(userQuizRecord);

            achievementService.updateQuizAchievement(user);

            Article article = articleRepository.findByArticleId(quizSectionArticleRepository.findByQuizId(quiz.getQuizId()).getArticleId());
            Game game = gameRepository.findByArticle(article);
            if (game != null) {
                UserGameRecord userGameRecord = userGameRecordRepository.findByGeneralUserAndGame(user, game);
                userGameRecord.setUnlocked(true);
                userGameRecordRepository.save(userGameRecord);
            }
        }

        QuizOption correctQuizOption = quizOptionRepository.findByQuizAndIsAnswer(quiz, true);

        answerDTO.setSubmittedOptionId(submittedQuizOptionId);
        answerDTO.setCorrectness(submittedQuizOption.isAnswer());
        answerDTO.setCorrectOptionId(correctQuizOption.getQuizOptionId());
        answerDTO.setCorrectOptionText(correctQuizOption.getQuizOptionText());
        return answerDTO;
    }

    public List<QuizResultDTO> getQuizResults() {
        List<QuizResultDTO> quizResultDTOList = new ArrayList<>();
        List<Long> articleIdList = articleService.getArticleIdWhichHasQuizzes();
        for (long articleId : articleIdList) {
            QuizResultDTO quizResultDTO = new QuizResultDTO();
            quizResultDTO.setArticleId(articleId);
            quizResultDTO.setArticleTitle(articleRepository.findByArticleId(articleId).getArticleTitle());
            quizResultDTO.setQuestionNumber(articleService.getNumberOfQuizzesForArticle(articleId));

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            quizResultDTO.setCorrectAnswer(userQuizArticleRepository.countByUsernameAndArticleId(authentication.getName(), articleId));

            quizResultDTOList.add(quizResultDTO);
        }

        return quizResultDTOList;
    }
}
