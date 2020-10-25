package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.QuizSectionArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * This repository defines all the operations of Entity QuQuizSectionArticle
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface QuizSectionArticleRepository extends JpaRepository<QuizSectionArticle, Long> {
    /**
     * find all the article id that have quizzes
     * @return the list of article id that have quizzes
     */
    @Query("select distinct articleId from QuizSectionArticle")
    List<Long> findDistinctArticleId();

    /**
     * find a QuizSectionArticle record by quiz id
     * @param quizId the quiz id that is used to search
     * @return the QuizSectionArticle record found
     */
    QuizSectionArticle findByQuizId(long quizId);

    /**
     * find the number of quizzes of a article
     * @param articleId the article id that is used to search
     * @return the number of quizzes of the article
     */
    int countByArticleId(long articleId);
}
