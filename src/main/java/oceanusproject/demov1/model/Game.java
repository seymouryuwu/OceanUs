package oceanusproject.demov1.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "games")
public class Game {
    @Id
    @Column(name = "game_id")
    private int gameId;

    @Column(name = "game_name")
    private String gameName;

    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
    private List<UserGameRecord> userGameRecordList = new ArrayList<>();

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
