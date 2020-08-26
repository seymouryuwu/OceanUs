package oceanusproject.demov1.dto;

import java.util.List;

public class SectionQuizDTO {
    private long sectionId;
    List<QuizDTO> sectionQuizDTOList;

    public long getSectionId() {
        return sectionId;
    }

    public void setSectionId(long sectionId) {
        this.sectionId = sectionId;
    }

    public List<QuizDTO> getSectionQuizDTOList() {
        return sectionQuizDTOList;
    }

    public void setSectionQuizDTOList(List<QuizDTO> sectionQuizDTOList) {
        this.sectionQuizDTOList = sectionQuizDTOList;
    }
}
