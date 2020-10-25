package oceanusproject.demov1.dto;

import javax.validation.constraints.NotNull;

public class ScoreDTO {
    @NotNull(message = "Game ID cannot be null")
    private int gameId;

    @NotNull(message = "Score cannot be null")
    private int score;

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
