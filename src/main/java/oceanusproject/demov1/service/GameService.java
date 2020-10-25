package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.GameResultDTO;
import oceanusproject.demov1.dto.GameUnlockStateDTO;
import oceanusproject.demov1.model.Game;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.UserGameRecord;
import oceanusproject.demov1.repository.GameRepository;
import oceanusproject.demov1.repository.UserGameRecordRepository;
import oceanusproject.demov1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * the services about game
 */
@Service
public class GameService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private UserGameRecordRepository userGameRecordRepository;

    @Autowired
    private AchievementService achievementService;

    /**
     * save the highest score for a game
     * @param gameId the game id that identify a game
     * @param score the score that will be checked
     */
    public void saveHighestRecord(int gameId, int score) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            GeneralUser user = userRepository.findByUsername(currentPrincipalName);
            Game game = gameRepository.findByGameId(gameId);

            // if the score is greater that the existed score, it will be updated
            UserGameRecord userGameRecord = userGameRecordRepository.findByGeneralUserAndGame(user, game);
            if (userGameRecord.getScore() < score) {
                userGameRecord.setScore(score);
                userGameRecordRepository.save(userGameRecord);

                // check if the new score reaches an achievement, if so, the achievement will be updated
                achievementService.updateGameAchievement(user, game);
            }
        }
    }

    /**
     * generate game records for each game for new user
     * @param username the new registered user username
     */
    public void initialGameScore(String username) {
        GeneralUser user = userRepository.findByUsername(username);
        List<Game> gameList = gameRepository.findAll();
        for (Game game : gameList) {
            UserGameRecord userGameRecord = new UserGameRecord();
            userGameRecord.setGame(game);
            userGameRecord.setGeneralUser(user);
            // set the score 0 because the new user has not played any game
            userGameRecord.setScore(0);
            userGameRecord.setAchieveDate(LocalDate.now());

            userGameRecordRepository.save(userGameRecord);
        }
    }

    /**
     * get a list of GameResultDTO for current user
     * @return the list of GameResultDTO for current user
     */
    public List<GameResultDTO> getGameResults() {
        List<GameResultDTO> gameResultDTOList = new ArrayList<>();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        GeneralUser user = userRepository.findByUsername(authentication.getName());
        List<Game> gameList = gameRepository.findAll();
        for (Game game : gameList) {
            GameResultDTO gameResultDTO = new GameResultDTO();
            UserGameRecord userGameRecord = userGameRecordRepository.findByGeneralUserAndGame(user, game);
            gameResultDTO.setGameId(userGameRecord.getGame().getGameId());
            gameResultDTO.setGameName(userGameRecord.getGame().getGameName());
            gameResultDTO.setScore(userGameRecord.getScore());
            gameResultDTO.setAchieveDate(userGameRecord.getAchieveDate());

            gameResultDTOList.add(gameResultDTO);
        }
        return gameResultDTOList;
    }

    /**
     * check if a game is enable to be played
     * @param gameId the game id of the game that needs to be checked
     * @param httpServletRequest the http request contain the path where the user access from
     * @return the boolean will be true if the user can player
     */
    public boolean ifEnableToPlay(int gameId, HttpServletRequest httpServletRequest) {
        Game game = gameRepository.findByGameId(gameId);
        // get the URL from that the user access the game.
        // it will be null if the game is accessed from the URL other than /games or /adventurequiz
        String previousUrl = (String) httpServletRequest.getSession().getAttribute("previous_url");
        if (previousUrl != null) {
            // it is accessed from the /adventurequiz and the article id is correct
            if (previousUrl.startsWith("/adventurequiz") &&
                    game.getArticle().getArticleId() == Long.parseLong(previousUrl.substring(15))) {
                return true;
            }

            // it is accessed from the /games and the game is unlocked for the current logged-in user
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (previousUrl.equals("/games") && !(authentication instanceof AnonymousAuthenticationToken)) {
                String currentPrincipalName = authentication.getName();
                GeneralUser user = userRepository.findByUsername(currentPrincipalName);
                return userGameRecordRepository.findByGeneralUserAndGame(user, game).isUnlocked();
            }
        }
        return  false;
    }

    /**
     *
     * @return
     */
    public List<GameUnlockStateDTO> getGameUnlockState() {
        List<GameUnlockStateDTO> gameUnlockStateDTOList = new ArrayList<>();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        GeneralUser user = userRepository.findByUsername(authentication.getName());

        List<UserGameRecord> userGameRecordList = userGameRecordRepository.findByGeneralUser(user);
        for (UserGameRecord userGameRecord : userGameRecordList) {
            GameUnlockStateDTO gameUnlockStateDTO = new GameUnlockStateDTO();
            gameUnlockStateDTO.setGameId(userGameRecord.getGame().getGameId());
            gameUnlockStateDTO.setUnlockState(userGameRecord.isUnlocked());
            gameUnlockStateDTOList.add(gameUnlockStateDTO);
        }

        return gameUnlockStateDTOList;
    }
}
