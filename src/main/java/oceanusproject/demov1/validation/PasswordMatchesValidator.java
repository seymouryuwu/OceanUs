package oceanusproject.demov1.validation;

import oceanusproject.demov1.dto.UserDTO;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, Object> {
    private String message;

    @Override
    public void initialize(PasswordMatches constraintAnnotation) {
        this.message = constraintAnnotation.message();
    }

    @Override
    public boolean isValid(Object obj, ConstraintValidatorContext constraintValidatorContext) {
        final UserDTO userDTO = (UserDTO) obj;
        boolean isValid = userDTO.getPassword().equals(userDTO.getMatchingPassword());
        if (!isValid) {
            constraintValidatorContext.disableDefaultConstraintViolation();
            constraintValidatorContext.buildConstraintViolationWithTemplate(message)
                    .addPropertyNode( "matchingPassword" ).addConstraintViolation();
        }
        return isValid;
    }
}
