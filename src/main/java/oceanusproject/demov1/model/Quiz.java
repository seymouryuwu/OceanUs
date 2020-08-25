package oceanusproject.demov1.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "quizzes")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long quizId;

    @Column(name = "quiz_question", nullable = false)
    private String quizQuestion;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL) // need to figure out the function of cascade
    private List<QuizOption> quizOptions = new ArrayList<>();
}
