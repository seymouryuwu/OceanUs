package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.AnswerDTO;
import oceanusproject.demov1.dto.QuizDTO;
import oceanusproject.demov1.dto.SectionQuizDTO;
import oceanusproject.demov1.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/quiz")
public class QuizController {
    @Autowired
    QuizService quizService;

    @GetMapping("/getsectionquiz")
    public SectionQuizDTO getSectionQuiz(@Valid @RequestParam(value = "sectionId") long sectionId) {
        return quizService.getSectionQuiz(sectionId);
    }

    // this method will just return a single quiz, in case we need to get quizzes that don't belong to any section.
    @GetMapping("/getquiz")
    public QuizDTO getQuiz(@Valid @RequestParam(value = "quizId") long quizId) {
        return quizService.getQuiz(quizId);
    }

    @GetMapping("/examanswer")
    public AnswerDTO examAnswer(@Valid @RequestParam(value = "optionId") long optionId) {
        return quizService.examAnswer(optionId);
    }
}
