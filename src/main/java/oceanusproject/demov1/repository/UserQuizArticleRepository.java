package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.UserQuizArticle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserQuizArticleRepository extends JpaRepository<UserQuizArticle, Long> {
    int countByUsernameAndArticleId(String username, long articleId);
}
