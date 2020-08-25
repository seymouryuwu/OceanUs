package oceanusproject.demov1.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "quizOptions")
public class QuizOption {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long quizOptionId;

    @Column(name = "quiz_option_text", nullable = false)
    private String quizOptionText;

    @Column(name = "is_answer", nullable = false)
    private boolean isAnswer;

    @ManyToOne // what is fetch type
    @JoinColumn(name ="quiz_id", nullable = false)
    private Quiz quiz;
}
