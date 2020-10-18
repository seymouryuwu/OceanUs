package oceanusproject.demov1.model;

import org.hibernate.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Immutable
@Table(name = "quiz_section_article")
public class QuizSectionArticle {
    @Id
    @Column(name = "quiz_id")
    private long quizId;

    @Column(name = "article_id")
    private long articleId;

    // TO DO may delete
    @Column(name = "article_title")
    private String articleTitle;

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

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

}
