package oceanusproject.demov1.model;

import javax.persistence.*;

/**
 * Represent a user article record.
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Entity
@Table(name = "user_article_records")
public class UserArticleRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_article_id")
    private long userArticleId;

    @Column(name = "read_times")
    private int readTimes = 0;

    // foreign key username to GeneralUser
    @ManyToOne
    @JoinColumn(name ="username")
    private GeneralUser generalUser;

    // foreign key article_id to Article
    @ManyToOne
    @JoinColumn(name ="article_id")
    private Article article;

    public long getUserArticleId() {
        return userArticleId;
    }

    public void setUserArticleId(long userArticleId) {
        this.userArticleId = userArticleId;
    }

    public int getReadTimes() {
        return readTimes;
    }

    public void setReadTimes(int readTimes) {
        this.readTimes = readTimes;
    }

    public GeneralUser getGeneralUser() {
        return generalUser;
    }

    public void setGeneralUser(GeneralUser generalUser) {
        this.generalUser = generalUser;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
