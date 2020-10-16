package oceanusproject.demov1.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "achievements")
public class Achievement {
    @Id
    @Column(name = "achievement_id")
    private long achievementId;

    @Column(name = "achievement_title")
    private String achievementTitle;

    @Column(name = "achievement_description")
    private String achievementDescription;

    @OneToMany(mappedBy = "Achievement", cascade = CascadeType.ALL)
    private List<AchievementRecord> achievementRecordList = new ArrayList<>();

    public long getAchievementId() {
        return achievementId;
    }

    public void setAchievementId(long achievementId) {
        this.achievementId = achievementId;
    }

    public String getAchievementTitle() {
        return achievementTitle;
    }

    public void setAchievementTitle(String achievementTitle) {
        this.achievementTitle = achievementTitle;
    }

    public String getAchievementDescription() {
        return achievementDescription;
    }

    public void setAchievementDescription(String achievementDescription) {
        this.achievementDescription = achievementDescription;
    }
}
