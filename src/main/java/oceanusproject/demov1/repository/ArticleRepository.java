package oceanusproject.demov1.repository;


import oceanusproject.demov1.model.Article;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * This repository defines all the operations of Entity Article
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    /**
     * find an article by article id.
     * @param articleId an article id that is used to search
     * @return the article that is found
     */
    Article findByArticleId(long articleId);
}
