package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * This repository defines all the operations of Entity Achievement
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface AchievementRepository extends JpaRepository<Achievement, Long> {
    /**
     * find an achievement by achievement id.
     * @param achievementId an achievement id that is used to search
     * @return the achievement that is found
     */
    Achievement findByAchievementId(long achievementId);
}
