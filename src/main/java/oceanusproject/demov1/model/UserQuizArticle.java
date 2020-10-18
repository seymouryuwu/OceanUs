package oceanusproject.demov1.model;

import org.hibernate.annotations.Immutable;
import org.springframework.cache.annotation.CacheConfig;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Immutable
@Table(name = "user_quiz_article")
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
