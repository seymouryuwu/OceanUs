package oceanusproject.demov1.model;

import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Represent a view which join table user_quiz_records, quizzes, sections and articles.
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Entity
@Immutable
@Subselect(""+
        "select uqr.user_quiz_record_id, uqr.username, a.article_id " +
        "from user_quiz_records uqr " +
        "join quizzes q on uqr.quiz_id = q.quiz_id " +
        "join sections s on q.section_id = s.section_id " +
        "join articles a on s.article_id = a.article_id " +
        "where uqr.answer_result = true")
public class UserQuizArticle {
    @Id
    @Column(name = "user_quiz_record_id")
    private long userQuizRecordId;

    @Column(name = "username")
    private String username;

    @Column(name = "article_id")
    private long articleId;

    public long getUserQuizRecordId() {
        return userQuizRecordId;
    }

    public void setUserQuizRecordId(long userQuizRecordId) {
        this.userQuizRecordId = userQuizRecordId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getArticleId() {
        return articleId;
    }

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }
}
