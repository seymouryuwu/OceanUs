package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.Quiz;
import oceanusproject.demov1.model.UserQuizRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserQuizRecordRepository extends JpaRepository<UserQuizRecord, Long> {
    UserQuizRecord findByGeneralUserAndQuiz(GeneralUser generalUser, Quiz quiz);

    long countByGeneralUserAndAnswerResult(GeneralUser generalUser, boolean answerResult);
}
