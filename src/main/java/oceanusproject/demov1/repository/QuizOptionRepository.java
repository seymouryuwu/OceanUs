package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Quiz;
import oceanusproject.demov1.model.QuizOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * This repository defines all the operations of Entity QuizOption
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Repository
public interface QuizOptionRepository extends JpaRepository<QuizOption, Long> {
    /**
     * find a list of quiz option by quiz.
     * @param quiz the quiz that is used to search
     * @return the list of quizzes option that belong to this quiz
     */
    List<QuizOption> findByQuiz(Quiz quiz);

    /**
     * find a quiz option by quiz option id
     * @param QuizOptionId the quiz option id that is used to be search
     * @return the quiz option that is found
     */
    QuizOption findByQuizOptionId(long QuizOptionId);

    /**
     * find the correct quiz option for a quiz
     * @param quiz the quiz that is used to search
     * @param isAnswer the correctness of this quiz option
     * @return the quiz option that is correct
     */
    QuizOption findByQuizAndIsAnswer(Quiz quiz, boolean isAnswer);
}
