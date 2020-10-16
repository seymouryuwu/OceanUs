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

@Entity
@Table(name = "achievement_records")
public class AchievementRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long AchievementRecordId;

    @Column(name = "unlockDate")
    LocalDate unlockDate;

    @ManyToOne
    @JoinColumn(name ="username")
    private GeneralUser generalUser;

    @ManyToOne
    @JoinColumn(name ="achievement_id")
    private Achievement Achievement;

    public long getAchievementRecordId() {
        return AchievementRecordId;
    }

    public void setAchievementRecordId(long achievementRecordId) {
        AchievementRecordId = achievementRecordId;
    }

    public LocalDate getUnlockDate() {
        return unlockDate;
    }

    public void setUnlockDate(LocalDate unlockDate) {
        this.unlockDate = unlockDate;
    }
}
