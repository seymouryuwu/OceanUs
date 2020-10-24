package oceanusproject.demov1.dto;

public class GameUnlockStateDTO {
    private int gameId;
    private boolean unlockState;

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public boolean isUnlockState() {
        return unlockState;
    }

    public void setUnlockState(boolean unlockState) {
        this.unlockState = unlockState;
    }
}
