package oceanusproject.demov1.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "quizzes")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "quiz_id")
    private long quizId;

    @Column(name = "quiz_question", nullable = false)
    private String quizQuestion;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL) // need to figure out the function of cascade
    private List<QuizOption> quizOptions = new ArrayList<>();

    @ManyToOne // what is fetch type
    @JoinColumn(name = "section_id") // can be null, because there may be some individual quizzes
    private Section section;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
    private List<UserQuizRecord> userQuizRecord = new ArrayList<>();

    public long getQuizId() {
        return quizId;
    }

    public void setQuizId(long quizId) {
        this.quizId = quizId;
    }

    public String getQuizQuestion() {
        return quizQuestion;
    }

    public void setQuizQuestion(String quizQuestion) {
        this.quizQuestion = quizQuestion;
    }
}
