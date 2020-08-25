package oceanusproject.demov1.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sections")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long sectionId;

    @Column(name = "section_sequence_number")
    private int sectionSequenceNumber;

    @Column(name = "section_header", nullable = false)
    private String sectionHeader;

    @Column(name = "section_text", nullable = false)
    private String sectionText;

    @OneToMany(mappedBy = "section", cascade = CascadeType.ALL) // need to figure out the function of cascade
    private List<Quiz> quizzes = new ArrayList<>();

    @ManyToOne // what is fetch type
    @JoinColumn(name ="article_id") // can be null, because something like "fun fact" don't need belong to an article
    private Article article;
}
