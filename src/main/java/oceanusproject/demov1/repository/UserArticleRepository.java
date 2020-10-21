package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Article;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.UserArticleRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserArticleRepository extends JpaRepository<UserArticleRecord, Long> {
    List<UserArticleRecord> findByGeneralUser(GeneralUser generalUser);

    UserArticleRecord findByGeneralUserAndArticle(GeneralUser generalUser, Article article);
}
