package oceanusproject.demov1.controller;


import oceanusproject.demov1.dto.QuizDTO;
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

    @GetMapping("/getquiz")
    public QuizDTO getQuiz(@Valid @RequestParam(value = "quizId") long sectionId) {
        return quizService.getQuiz(sectionId);
    }
}
