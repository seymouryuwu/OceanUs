package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Article;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.UserArticleRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * This repository defines all the operations of Entity UserArticleRecord
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface UserArticleRepository extends JpaRepository<UserArticleRecord, Long> {
    /**
     * find a list of user article records by user
     * @param generalUser
     * @return
     */
    List<UserArticleRecord> findByGeneralUser(GeneralUser generalUser);

    /**
     * find a user article record by user and article
     * @param generalUser the user that is used to search
     * @param article the user that is used to search
     * @return the user article record found
     */
    UserArticleRecord findByGeneralUserAndArticle(GeneralUser generalUser, Article article);
}
