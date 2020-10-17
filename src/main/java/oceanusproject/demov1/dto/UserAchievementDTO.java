package oceanusproject.demov1.dto;

import java.util.List;

public class UserAchievementDTO {
    private String username;
    private List<AchievementDTO> achievementDTOList;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<AchievementDTO> getAchievementDTOList() {
        return achievementDTOList;
    }

    public void setAchievementDTOList(List<AchievementDTO> achievementDTOList) {
        this.achievementDTOList = achievementDTOList;
    }
}
