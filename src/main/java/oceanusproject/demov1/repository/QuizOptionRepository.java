package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Quiz;
import oceanusproject.demov1.model.QuizOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizOptionRepository extends JpaRepository<QuizOption, Long> {
    List<QuizOption> findByQuiz(Quiz quiz);

    QuizOption findByQuizOptionId(long QuizOptionId);

    QuizOption findByQuizAndIsAnswer(Quiz quiz, boolean isAnswer);
}
