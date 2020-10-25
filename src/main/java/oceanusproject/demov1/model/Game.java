package oceanusproject.demov1.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

/**
 * Represent a game.
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Entity
@Table(name = "games")
public class Game {
    @Id
    @Column(name = "game_id")
    private int gameId;

    @Column(name = "game_name")
    private String gameName;

    // to build a foreign key in UserGameRecord
    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
    private List<UserGameRecord> userGameRecordList = new ArrayList<>();


    // foreign key unlock_by_article to Article
    @OneToOne
    @JoinColumn(name = "unlock_by_article")
    private Article article;

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
