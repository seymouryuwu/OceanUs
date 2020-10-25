package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Quiz;
import oceanusproject.demov1.model.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * This repository defines all the operations of Entity Quiz
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    /**
     * find a list of quizzes that belong to a section
     * @param section the section that is used to search
     * @return the list of quizzes that belong to the section
     */
    List<Quiz> findBySection(Section section);

    /**
     * find a quiz by quiz id
     * @param quizId the quiz id that is used to search
     * @return the quiz found
     */
    Quiz findByQuizId(long quizId);
}
