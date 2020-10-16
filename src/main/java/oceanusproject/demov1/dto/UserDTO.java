package oceanusproject.demov1.dto;

import oceanusproject.demov1.validation.PasswordMatches;
import oceanusproject.demov1.validation.ValidUsername;
import oceanusproject.demov1.validation.ValidPassword;

import javax.validation.constraints.NotNull;

@PasswordMatches
public class UserDTO {
    @NotNull
    @ValidUsername
    private String username;

    @ValidPassword
    private String password;

    @NotNull
    private String matchingPassword;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMatchingPassword() {
        return matchingPassword;
    }

    public void setMatchingPassword(String matchingPassword) {
        this.matchingPassword = matchingPassword;
    }
}
