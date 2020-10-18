package oceanusproject.demov1.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sections")
public class Section {
    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "section_id")
    private long sectionId;

    @Column(name = "section_sequence_number")
    private int sectionSequenceNumber;

    @Column(name = "section_header", nullable = false)
    private String sectionHeader;

    @Column(name = "section_text", nullable = false, columnDefinition = "TEXT")
    private String sectionText;

    @Column(name = "has_quiz", nullable = false)
    private boolean hasQuiz;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_alignment")
    private String imageAlignment;

    @OneToMany(mappedBy = "section", cascade = CascadeType.ALL) // need to figure out the function of cascade
    private List<Quiz> quizzes = new ArrayList<>();

    @ManyToOne // what is fetch type
    @JoinColumn(name ="article_id") // can be null, because something like "fun fact" don't need belong to an article
    private Article article;

    public long getSectionId() {
        return sectionId;
    }

    public void setSectionId(long sectionId) {
        this.sectionId = sectionId;
    }

    public int getSectionSequenceNumber() {
        return sectionSequenceNumber;
    }

    public void setSectionSequenceNumber(int sectionSequenceNumber) {
        this.sectionSequenceNumber = sectionSequenceNumber;
    }

    public String getSectionHeader() {
        return sectionHeader;
    }

    public void setSectionHeader(String sectionHeader) {
        this.sectionHeader = sectionHeader;
    }

    public String getSectionText() {
        return sectionText;
    }

    public void setSectionText(String sectionText) {
        this.sectionText = sectionText;
    }

    public boolean isHasQuiz() {
        return hasQuiz;
    }

    public void setHasQuiz(boolean hasQuiz) {
        this.hasQuiz = hasQuiz;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageAlignment() {
        return imageAlignment;
    }

    public void setImageAlignment(String imageAlignment) {
        this.imageAlignment = imageAlignment;
    }
}
