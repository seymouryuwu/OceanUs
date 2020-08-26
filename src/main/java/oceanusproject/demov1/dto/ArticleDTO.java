package oceanusproject.demov1.dto;

import java.util.List;

public class ArticleDTO {
    private long articleId;
    private String articleTitle;
    private List<SectionDTO> sectionDTOList;

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

    public List<SectionDTO> getSectionDTOList() {
        return sectionDTOList;
    }

    public void setSectionDTOList(List<SectionDTO> sectionDTOList) {
        this.sectionDTOList = sectionDTOList;
    }
}
