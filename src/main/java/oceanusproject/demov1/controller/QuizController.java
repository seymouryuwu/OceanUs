package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.AnswerDTO;
import oceanusproject.demov1.dto.QuizDTO;
import oceanusproject.demov1.dto.SectionQuizDTO;
import oceanusproject.demov1.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@RestController
@RequestMapping("/quiz")
@Validated
@CrossOrigin
public class QuizController {
    @Autowired
    private QuizService quizService;

    @GetMapping("/getsectionquiz")
    public SectionQuizDTO getSectionQuiz(@RequestParam(value = "sectionId") @Min(1) @Max(100) long sectionId) {
        return quizService.getSectionQuiz(sectionId);
    }

    // this method will just return a single quiz, in case we need to get quizzes that don't belong to any section.
    @GetMapping("/getquiz")
    public QuizDTO getQuiz(@RequestParam(value = "quizId") @Min(1) @Max(100) long quizId) {
        return quizService.getQuiz(quizId);
    }

    @GetMapping("/examanswer")
    public AnswerDTO examAnswer(@RequestParam(value = "optionId") @Min(1) @Max(100) long optionId) {
        //Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        //String currentPrincipalName = authentication.getName();
        //System.out.println(currentPrincipalName);
        return quizService.examAnswer(optionId);
    }
}
