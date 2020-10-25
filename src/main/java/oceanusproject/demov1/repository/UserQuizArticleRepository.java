package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.UserQuizArticle;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * This repository defines all the operations of Entity UserQuizArticle
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface UserQuizArticleRepository extends JpaRepository<UserQuizArticle, Long> {
    /**
     * find the number of quizzes that are answered correctly for a user and a certain article
     * @param username the user that is used to search
     * @param articleId the article that is used to search
     * @return the number of quizzes that are answered correctly for a user and a certain article
     */
    int countByUsernameAndArticleId(String username, long articleId);
}
