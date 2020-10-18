package oceanusproject.demov1.model;

import javax.persistence.*;

@Entity
@Table(name = "user_article")
public class UserArticle {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_article_id")
    private long userArticleId;

    @Column(name = "read_times")
    private int readTimes = 0;

    @ManyToOne
    @JoinColumn(name ="username")
    private GeneralUser generalUser;

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
