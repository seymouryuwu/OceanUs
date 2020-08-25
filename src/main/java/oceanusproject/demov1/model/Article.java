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
@Table(name = "articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long articleId;

    @Column(name = "article_title", nullable = false)
    private String articleTitle;

    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL) // need to figure out the function of cascade
    private List<Section> sections = new ArrayList<>();
}
