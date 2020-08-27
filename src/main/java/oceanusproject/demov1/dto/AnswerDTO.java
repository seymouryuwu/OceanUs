package oceanusproject.demov1.dto;

public class AnswerDTO {
    private long submittedOptionId;
    private boolean correctness;
    private long correctOptionId;
    private String correctOptionText;

    public long getSubmittedOptionId() {
        return submittedOptionId;
    }

    public void setSubmittedOptionId(long submittedOptionId) {
        this.submittedOptionId = submittedOptionId;
    }

    public boolean isCorrectness() {
        return correctness;
    }

    public void setCorrectness(boolean correctness) {
        this.correctness = correctness;
    }

    public long getCorrectOptionId() {
        return correctOptionId;
    }

    public void setCorrectOptionId(long correctOptionId) {
        this.correctOptionId = correctOptionId;
    }

    public String getCorrectOptionText() {
        return correctOptionText;
    }

    public void setCorrectOptionText(String correctOptionText) {
        this.correctOptionText = correctOptionText;
    }
}
