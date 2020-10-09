package oceanusproject.demov1.dto;

import oceanusproject.demov1.validation.PasswordMatches;
import oceanusproject.demov1.validation.ValidEmail;
import oceanusproject.demov1.validation.ValidPassword;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@PasswordMatches
public class UserDTO {
    @NotNull
    @ValidEmail
    private String email;

    @ValidPassword
    private String password;

    @NotNull
    private String matchingPassword;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
