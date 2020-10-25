package oceanusproject.demov1.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

/**
 * Represent an achievement.
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
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

    @Column(name = "badge_image_url")
    private String badgeImageUrl;

    // to build a foreign key in AchievementRecord
    @OneToMany(mappedBy = "achievement", cascade = CascadeType.ALL)
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

    public String getBadgeImageUrl() {
        return badgeImageUrl;
    }

    public void setBadgeImageUrl(String badgeImageUrl) {
        this.badgeImageUrl = badgeImageUrl;
    }
}
