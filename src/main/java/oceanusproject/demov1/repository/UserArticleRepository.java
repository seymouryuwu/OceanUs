package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Article;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.UserArticle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserArticleRepository extends JpaRepository<UserArticle, Long> {
    List<UserArticle> findByGeneralUser(GeneralUser generalUser);

    UserArticle findByGeneralUserAndArticle(GeneralUser generalUser, Article article);
}
