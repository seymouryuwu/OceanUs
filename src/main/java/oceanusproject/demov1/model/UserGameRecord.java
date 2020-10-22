package oceanusproject.demov1.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "user_game_records")
public class UserGameRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userGameRecordId;

    @Column(name = "score")
    private int score;

    @Column(name = "achieveDate")
    private LocalDate achieveDate;

    @Column(name = "is_unlocked")
    private boolean isUnlocked;

    @ManyToOne
    @JoinColumn(name ="username")
    private GeneralUser generalUser;

    @ManyToOne
    @JoinColumn(name ="game_id")
    private Game game;

    public long getUserGameRecordId() {
        return userGameRecordId;
    }

    public void setUserGameRecordId(long userGameRecordId) {
        this.userGameRecordId = userGameRecordId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public LocalDate getAchieveDate() {
        return achieveDate;
    }

    public void setAchieveDate(LocalDate achieveDate) {
        this.achieveDate = achieveDate;
    }

    public boolean isUnlocked() {
        return isUnlocked;
    }

    public void setUnlocked(boolean unlocked) {
        isUnlocked = unlocked;
    }

    public GeneralUser getGeneralUser() {
        return generalUser;
    }

    public void setGeneralUser(GeneralUser generalUser) {
        this.generalUser = generalUser;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}
