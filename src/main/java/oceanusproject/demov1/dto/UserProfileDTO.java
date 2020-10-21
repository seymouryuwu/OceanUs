package oceanusproject.demov1.dto;

import java.util.List;

public class UserProfileDTO {
    private String username;
    private String nickname;
    private int totalCorrect;
    private int totalQuestion;
    private List<QuizResultDTO> quizResultDTOList;
    private List<GameResultDTO> gameResultDTOList;
    private List<AchievementDTO> achievementDTOList;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public int getTotalCorrect() {
        return totalCorrect;
    }

    public void setTotalCorrect(int totalCorrect) {
        this.totalCorrect = totalCorrect;
    }

    public int getTotalQuestion() {
        return totalQuestion;
    }

    public void setTotalQuestion(int totalQuestion) {
        this.totalQuestion = totalQuestion;
    }

    public List<QuizResultDTO> getQuizResultDTOList() {
        return quizResultDTOList;
    }

    public void setQuizResultDTOList(List<QuizResultDTO> quizResultDTOList) {
        this.quizResultDTOList = quizResultDTOList;
    }

    public List<GameResultDTO> getGameResultDTOList() {
        return gameResultDTOList;
    }

    public void setGameResultDTOList(List<GameResultDTO> gameResultDTOList) {
        this.gameResultDTOList = gameResultDTOList;
    }

    public List<AchievementDTO> getAchievementDTOList() {
        return achievementDTOList;
    }

    public void setAchievementDTOList(List<AchievementDTO> achievementDTOList) {
        this.achievementDTOList = achievementDTOList;
    }
}
