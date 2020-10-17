package oceanusproject.demov1.model;

import javax.persistence.*;

@Entity
@Table(name = "user_quiz_records")
public class UserQuizRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long UserQuizRecordId;

    @Column(name = "answer_result")
    private boolean answerResult;

    @ManyToOne
    @JoinColumn(name ="username")
    private GeneralUser generalUser;

    @ManyToOne
    @JoinColumn(name ="quiz_id")
    private Quiz quiz;

    public long getUserQuizRecordId() {
        return UserQuizRecordId;
    }

    public void setUserQuizRecordId(long userQuizRecordId) {
        UserQuizRecordId = userQuizRecordId;
    }

    public boolean isAnswerResult() {
        return answerResult;
    }

    public void setAnswerResult(boolean answerResult) {
        this.answerResult = answerResult;
    }

    public GeneralUser getGeneralUser() {
        return generalUser;
    }

    public void setGeneralUser(GeneralUser generalUser) {
        this.generalUser = generalUser;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }
}
