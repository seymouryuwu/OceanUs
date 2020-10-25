package oceanusproject.demov1.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDate;

/**
 * Represent an achievement record.
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Entity
@Table(name = "achievement_records")
public class AchievementRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long achievementRecordId;

    @Column(name = "unlockDate")
    private LocalDate unlockDate;

    // foreign key username to GeneralUser
    @ManyToOne
    @JoinColumn(name ="username")
    private GeneralUser generalUser;

    // foreign key achievement_id to Achievement
    @ManyToOne
    @JoinColumn(name ="achievement_id")
    private Achievement achievement;

    public long getAchievementRecordId() {
        return achievementRecordId;
    }

    public void setAchievementRecordId(long achievementRecordId) {
        this.achievementRecordId = achievementRecordId;
    }

    public LocalDate getUnlockDate() {
        return unlockDate;
    }

    public void setUnlockDate(LocalDate unlockDate) {
        this.unlockDate = unlockDate;
    }

    public GeneralUser getGeneralUser() {
        return generalUser;
    }

    public void setGeneralUser(GeneralUser generalUser) {
        this.generalUser = generalUser;
    }

    public Achievement getAchievement() {
        return achievement;
    }

    public void setAchievement(Achievement achievement) {
        this.achievement = achievement;
    }
}
