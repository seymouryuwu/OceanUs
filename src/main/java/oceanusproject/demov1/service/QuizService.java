package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.AnswerDTO;
import oceanusproject.demov1.dto.QuizDTO;
import oceanusproject.demov1.dto.QuizOptionDTO;
import oceanusproject.demov1.dto.SectionQuizDTO;
import oceanusproject.demov1.model.*;
import oceanusproject.demov1.repository.*;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
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
    private UserQuizRecordRepository userQuizRecordRepository;

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

    public AnswerDTO examAnswer(long submittedQuizOptionId, String currentPrincipalName) {
        AnswerDTO answerDTO = new AnswerDTO();
        QuizOption submittedQuizOption =  quizOptionRepository.findByQuizOptionId(submittedQuizOptionId);
        Quiz quiz = submittedQuizOption.getQuiz();
        GeneralUser user = userRepository.findByUsername(currentPrincipalName);

        UserQuizRecord userQuizRecord = userQuizRecordRepository.findByGeneralUserAndQuiz(user, quiz);
        System.out.println("1"+userQuizRecord);
        if (userQuizRecord == null) {
            userQuizRecord = new UserQuizRecord();
        }
        System.out.println("2"+userQuizRecord);
        userQuizRecord.setAnswerResult(submittedQuizOption.isAnswer());
        userQuizRecord.setGeneralUser(user);
        userQuizRecord.setQuiz(quiz);
        System.out.println("3"+userQuizRecord);
        userQuizRecordRepository.save(userQuizRecord);
        System.out.println("4"+userQuizRecord);

        QuizOption correctQuizOption = quizOptionRepository.findByQuizAndIsAnswer(quiz, true);

        answerDTO.setSubmittedOptionId(submittedQuizOptionId);
        answerDTO.setCorrectness(submittedQuizOption.isAnswer());
        answerDTO.setCorrectOptionId(correctQuizOption.getQuizOptionId());
        answerDTO.setCorrectOptionText(correctQuizOption.getQuizOptionText());
        return answerDTO;
    }
}
