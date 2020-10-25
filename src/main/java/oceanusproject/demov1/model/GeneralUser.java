package oceanusproject.demov1.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

/**
 * Represent a user.
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Entity
@Table(name = "general_users")
public class GeneralUser {
    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "password")
    private String password;

    // to build a foreign key in AchievementRecord
    @OneToMany(mappedBy = "generalUser", cascade = CascadeType.ALL)
    private List<AchievementRecord> achievementRecordList = new ArrayList<>();

    // to build a foreign key in UserQuizRecord
    @OneToMany(mappedBy = "generalUser", cascade = CascadeType.ALL)
    private List<UserQuizRecord> userQuizRecordList = new ArrayList<>();

    // to build a foreign key in UserGameRecord
    @OneToMany(mappedBy = "generalUser", cascade = CascadeType.ALL)
    private List<UserGameRecord> userGameRecordList = new ArrayList<>();

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<AchievementRecord> getAchievementRecordList() {
        return achievementRecordList;
    }

    public void setAchievementRecordList(List<AchievementRecord> achievementRecordList) {
        this.achievementRecordList = achievementRecordList;
    }

    public List<UserQuizRecord> getUserQuizRecordList() {
        return userQuizRecordList;
    }

    public void setUserQuizRecordList(List<UserQuizRecord> userQuizRecordList) {
        this.userQuizRecordList = userQuizRecordList;
    }

    public List<UserGameRecord> getUserGameRecordList() {
        return userGameRecordList;
    }

    public void setUserGameRecordList(List<UserGameRecord> userGameRecordList) {
        this.userGameRecordList = userGameRecordList;
    }
}
