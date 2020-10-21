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

    @Transactional
    public void registerNewUserAccount(UserDTO userDTO) throws UserAlreadyExistException {
        if (usernameExist(userDTO.getUsername())) {
            throw new UserAlreadyExistException(
                    "There is an account with that email address: " + userDTO.getUsername());
        }

        // the rest of the registration operation
        GeneralUser user = new GeneralUser();
        user.setUsername(userDTO.getUsername());
        user.setNickname("OceanUs User");
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);

        gameService.initialGameScore(user);
    }

    private boolean usernameExist(String username) {
        return userRepository.findByUsername(username) != null;
    }

    public boolean checkIfLoggedIn() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return !(authentication instanceof AnonymousAuthenticationToken);
    }

    public UserProfileDTO getProfileDTO() {
        UserProfileDTO userProfileDTO = new UserProfileDTO();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            userProfileDTO.setUsername(currentPrincipalName);
            userProfileDTO.setNickname(userRepository.findByUsername(currentPrincipalName).getNickname());

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
            userProfileDTO.setGameResultDTOList(gameService.getGameResults());
            userProfileDTO.setAchievementDTOList(achievementService.getUserAchievements());
        }
        return userProfileDTO;
    }

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
