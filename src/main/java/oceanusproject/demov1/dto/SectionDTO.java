package oceanusproject.demov1.dto;

public class SectionDTO {
    private long sectionId;
    private int sectionSequenceNumber;
    private String sectionHeader;
    private String sectionText;
    private boolean hasQuiz;
    private String imageUrl;
    private String imageAlignment;

    public long getSectionId() {
        return sectionId;
    }

    public void setSectionId(long sectionId) {
        this.sectionId = sectionId;
    }

    public int getSectionSequenceNumber() {
        return sectionSequenceNumber;
    }

    public void setSectionSequenceNumber(int sectionSequenceNumber) {
        this.sectionSequenceNumber = sectionSequenceNumber;
    }

    public String getSectionHeader() {
        return sectionHeader;
    }

    public void setSectionHeader(String sectionHeader) {
        this.sectionHeader = sectionHeader;
    }

    public String getSectionText() {
        return sectionText;
    }

    public void setSectionText(String sectionText) {
        this.sectionText = sectionText;
    }

    public boolean isHasQuiz() {
        return hasQuiz;
    }

    public void setHasQuiz(boolean hasQuiz) {
        this.hasQuiz = hasQuiz;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageAlignment() {
        return imageAlignment;
    }

    public void setImageAlignment(String imageAlignment) {
        this.imageAlignment = imageAlignment;
    }
}
