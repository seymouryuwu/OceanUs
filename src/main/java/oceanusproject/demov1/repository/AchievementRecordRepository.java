package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Achievement;
import oceanusproject.demov1.model.AchievementRecord;
import oceanusproject.demov1.model.GeneralUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AchievementRecordRepository extends JpaRepository<AchievementRecord, Long> {
    AchievementRecord findByGeneralUserAndAchievement(GeneralUser generalUser, Achievement achievement);

    List<AchievementRecord> findByGeneralUser(GeneralUser generalUser);
}
