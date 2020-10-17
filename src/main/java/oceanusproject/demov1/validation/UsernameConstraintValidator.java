package oceanusproject.demov1.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UsernameConstraintValidator implements ConstraintValidator<ValidUsername, String> {
    private static final String USERNAME_PATTERN = "^[aA-zZ]\\w{5,29}$";
    private static final Pattern PATTERN = Pattern.compile(USERNAME_PATTERN);

    @Override
    public void initialize(ValidUsername constraintAnnotation) {

    }

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        return validateUsername(username);
    }

    private boolean validateUsername(final String username) {
        Matcher matcher = PATTERN.matcher(username);
        return matcher.matches();
    }
}
