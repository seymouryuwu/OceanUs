package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.QuizResultDTO;
import oceanusproject.demov1.dto.UserDTO;
import oceanusproject.demov1.dto.UserProfileDTO;
import oceanusproject.demov1.error.UserAlreadyExistException;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * services about user
 */
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AchievementService achievementService;

    @Autowired
    private QuizService quizService;

    @Autowired
    private GameService gameService;

    /**
     * register a new user account
     * @param userDTO the user sign up information
     * @throws UserAlreadyExistException if the username already existed in the database, this exception throw
     */
    @Transactional
    public void registerNewUserAccount(UserDTO userDTO) throws UserAlreadyExistException {
        if (usernameExist(userDTO.getUsername())) {
            throw new UserAlreadyExistException(
                    "There is an account with that email address: " + userDTO.getUsername());
        }

        GeneralUser user = new GeneralUser();
        user.setUsername(userDTO.getUsername());
        user.setNickname("OceanUs User");
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);

        // for every new user the system will create the user game records for each game,
        // the initial score is 0
        gameService.initialGameScore(userDTO.getUsername());
    }

    /**
     * check if the user already existed
     * @param username the username that is checked
     * @return ture if there is the same username in the database
     */
    private boolean usernameExist(String username) {
        return userRepository.findByUsername(username) != null;
    }

    /**
     * check if there is logged-in user in the context
     * @return ture if the user is logged in
     */
    public boolean checkIfLoggedIn() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return !(authentication instanceof AnonymousAuthenticationToken);
    }

    /**
     * generate the UserProfileDTO
     * @return the UserProfileDTO
     */
    public UserProfileDTO getProfileDTO() {
        UserProfileDTO userProfileDTO = new UserProfileDTO();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            userProfileDTO.setUsername(currentPrincipalName);
            userProfileDTO.setNickname(userRepository.findByUsername(currentPrincipalName).getNickname());

            // find the result of the quizzes answered so far
            List<QuizResultDTO> quizResultDTOList = quizService.getQuizResults();
            int totalCorrect = 0;
            int totalQuestion = 0;
            for (QuizResultDTO quizResultDTO : quizResultDTOList) {
                totalCorrect += quizResultDTO.getCorrectAnswer();
                totalQuestion += quizResultDTO.getQuestionNumber();
            }

            userProfileDTO.setTotalCorrect(totalCorrect);
            userProfileDTO.setTotalQuestion(totalQuestion);
            userProfileDTO.setQuizResultDTOList(quizResultDTOList);

            // find the highest score of games of the user
            userProfileDTO.setGameResultDTOList(gameService.getGameResults());

            // find the achievements that the user get so far
            userProfileDTO.setAchievementDTOList(achievementService.getUserAchievements());
        }
        return userProfileDTO;
    }

    /**
     * set a nickname for user
     * @param nickname
     */
    public void setNickname(String nickname) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            GeneralUser user = userRepository.findByUsername(currentPrincipalName);
            user.setNickname(nickname);

            userRepository.save(user);
        }
    }
}
