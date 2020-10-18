package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.QuizSectionArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizSectionArticleRepository extends JpaRepository<QuizSectionArticle, Long> {
    @Query("select distinct articleId from QuizSectionArticle")
    List<Long> findDistinctArticleId();

    int countByArticleId(long articleId);
}
