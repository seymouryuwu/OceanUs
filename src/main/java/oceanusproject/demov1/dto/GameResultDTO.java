package oceanusproject.demov1.dto;

import java.time.LocalDate;

public class GameResultDTO {
    private int gameId;
    private String gameName;
    private int score;
    private LocalDate achieveDate;

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
}
