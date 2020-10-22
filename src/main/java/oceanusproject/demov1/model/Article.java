package oceanusproject.demov1.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "articles")
public class Article {
    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "article_id")
    private long articleId;

    @Column(name = "article_title", nullable = false)
    private String articleTitle;

    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL) // need to figure out the function of cascade
    private List<Section> sections = new ArrayList<>();

    @OneToOne(mappedBy = "article", cascade = CascadeType.ALL)
    private Game game;

    public long getArticleId() {
        return articleId;
    }

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public List<Section> getSections() {
        return sections;
    }

    public void setSections(List<Section> sections) {
        this.sections = sections;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}
