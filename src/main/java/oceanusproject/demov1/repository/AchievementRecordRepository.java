package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Achievement;
import oceanusproject.demov1.model.AchievementRecord;
import oceanusproject.demov1.model.GeneralUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * This repository defines all the operations of Entity AchievementRecord
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface AchievementRecordRepository extends JpaRepository<AchievementRecord, Long> {
    /**
     * find an achievement record by user and achievement.
     * @param generalUser a user whose records are searched.
     * @param achievement an achievement that is searched
     * @return the achievement record that is found
     */
    AchievementRecord findByGeneralUserAndAchievement(GeneralUser generalUser, Achievement achievement);

    /**
     * find a list of achievement records by user.
     * @param generalUser a user whose records are searched.
     * @return the list of achievement records that is found
     */
    List<AchievementRecord> findByGeneralUser(GeneralUser generalUser);
}
