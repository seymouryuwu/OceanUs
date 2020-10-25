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

    public void saveHighestRecord(int gameId, int score) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            GeneralUser user = userRepository.findByUsername(currentPrincipalName);
            Game game = gameRepository.findByGameId(gameId);

            UserGameRecord userGameRecord = userGameRecordRepository.findByGeneralUserAndGame(user, game);
            if (userGameRecord.getScore() < score) {
                userGameRecord.setScore(score);
                userGameRecordRepository.save(userGameRecord);

                achievementService.updateGameAchievement(user, game);
            }
        }
    }

    public void initialGameScore(String username) {
        GeneralUser user = userRepository.findByUsername(username);
        List<Game> gameList = gameRepository.findAll();
        for (Game game : gameList) {
            UserGameRecord userGameRecord = new UserGameRecord();
            userGameRecord.setGame(game);
            userGameRecord.setGeneralUser(user);
            userGameRecord.setScore(0);
            userGameRecord.setAchieveDate(LocalDate.now());

            userGameRecordRepository.save(userGameRecord);
        }
    }

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

    public boolean ifEnableToPlay(int gameId, HttpServletRequest httpServletRequest) {
        Game game = gameRepository.findByGameId(gameId);
        String previousUrl = (String) httpServletRequest.getSession().getAttribute("previous_url");
        if (previousUrl != null) {
            if (previousUrl.startsWith("/adventurequiz") &&
                    game.getArticle().getArticleId() == Long.parseLong(previousUrl.substring(9))) {
                return true;
            }

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (previousUrl.equals("/games") && !(authentication instanceof AnonymousAuthenticationToken)) {
                String currentPrincipalName = authentication.getName();
                GeneralUser user = userRepository.findByUsername(currentPrincipalName);
                return userGameRecordRepository.findByGeneralUserAndGame(user, game).isUnlocked();
            }
        }
        return  false;
    }

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
