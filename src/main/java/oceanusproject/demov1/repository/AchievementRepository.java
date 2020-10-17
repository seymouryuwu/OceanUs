package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Achievement;
import oceanusproject.demov1.model.UserQuizRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AchievementRepository extends JpaRepository<Achievement, Long> {
    Achievement findByAchievementId(long achievementId);
}
