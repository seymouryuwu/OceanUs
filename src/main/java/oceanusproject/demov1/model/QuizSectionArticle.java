package oceanusproject.demov1.model;

import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


/**
 * represent a view which join table quizzes, sections and articles
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Entity
@Immutable
@Subselect("select q.quiz_id, a.article_id " +
        "from quizzes q " +
        "join sections s on q.section_id = s.section_id " +
        "join articles a on s.article_id = a.article_id")
public class QuizSectionArticle {
    @Id
    @Column(name = "quiz_id")
    private long quizId;

    @Column(name = "article_id")
    private long articleId;

    public long getQuizId() {
        return quizId;
    }

    public void setQuizId(long quizId) {
        this.quizId = quizId;
    }

    public long getArticleId() {
        return articleId;
    }

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }
}
