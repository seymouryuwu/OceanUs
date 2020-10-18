package oceanusproject.demov1.repository;


import oceanusproject.demov1.model.Article;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    Article findByArticleId(long articleId);
}
