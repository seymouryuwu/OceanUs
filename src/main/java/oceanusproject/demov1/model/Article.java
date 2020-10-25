package oceanusproject.demov1.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

/**
 * Represent an article.
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Entity
@Table(name = "articles")
public class Article {
    @Id
    @Column(name = "article_id")
    private long articleId;

    @Column(name = "article_title", nullable = false)
    private String articleTitle;

    // to build a foreign key in Section
    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL) // need to figure out the function of cascade
    private List<Section> sections = new ArrayList<>();

    // to build a foreign key in Game
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
