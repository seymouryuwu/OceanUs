package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.Quiz;
import oceanusproject.demov1.model.UserQuizRecord;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * This repository defines all the operations of Entity UserQuizRecord
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface UserQuizRecordRepository extends JpaRepository<UserQuizRecord, Long> {
    /**
     * find a user quiz record by user and quiz
     * @param generalUser the user that is used to search
     * @param quiz the quiz that is used to search
     * @return the user quiz record found
     */
    UserQuizRecord findByGeneralUserAndQuiz(GeneralUser generalUser, Quiz quiz);

    /**
     * count the number of quizzes that is answered correctly of a user
     * @param generalUser the user that is used to search
     * @param answerResult the correctness of the quizzes
     * @return the number of quizzes that is answered correctly of a user
     */
    long countByGeneralUserAndAnswerResult(GeneralUser generalUser, boolean answerResult);
}
