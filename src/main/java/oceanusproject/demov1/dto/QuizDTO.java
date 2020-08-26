package oceanusproject.demov1.dto;

import java.util.ArrayList;
import java.util.List;

public class QuizDTO {
    private long quizId;
    private String quizQuestion;
    private List<QuizOptionDTO> quizOptionDTOList = new ArrayList<>();

    public long getQuizId() {
        return quizId;
    }

    public void setQuizId(long quizId) {
        this.quizId = quizId;
    }

    public String getQuizQuestion() {
        return quizQuestion;
    }

    public void setQuizQuestion(String quizQuestion) {
        this.quizQuestion = quizQuestion;
    }

    public List<QuizOptionDTO> getQuizOptionDTOList() {
        return quizOptionDTOList;
    }

    public void setQuizOptionDTOList(List<QuizOptionDTO> quizOptionDTOList) {
        this.quizOptionDTOList = quizOptionDTOList;
    }
}
