package oceanusproject.demov1.model;

import javax.persistence.*;
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

    @ManyToOne // what is fetch type
    @JoinColumn(name ="section_id") // can be null, because there may be some individual quizzes
    private Section section;
}
