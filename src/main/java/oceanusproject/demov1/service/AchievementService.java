package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.AchievementDTO;
import oceanusproject.demov1.model.*;
import oceanusproject.demov1.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * the services about achievement
 */
@Service
public class AchievementService {
    @Autowired
    private AchievementRepository achievementRepository;

    @Autowired
    private AchievementRecordRepository achievementRecordRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserQuizRecordRepository userQuizRecordRepository;

    @Autowired
    private UserArticleRepository userArticleRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserGameRecordRepository userGameRecordRepository;

    /**
     * update the achievement about quiz for a user when users answer a certain number of quizzes correctly.
     * @param user the user that will be checked to update quiz achievement
     */
    public void updateQuizAchievement(GeneralUser user) {
        long numberOfCorrectAnswer = userQuizRecordRepository.countByGeneralUserAndAnswerResult(user, true);

        // if the number of correct answers is greater than 1, or 7, or 14, or 21, or 28, the user will get
        // an achievement
        if (numberOfCorrectAnswer >= 1) {
            updateAchievementById(user, 1);
        }

        if (numberOfCorrectAnswer >= 7) {
            updateAchievementById(user, 2);
        }

        if (numberOfCorrectAnswer >= 14) {
            updateAchievementById(user, 3);
        }

        if (numberOfCorrectAnswer >= 21) {
            updateAchievementById(user, 4);
        }

        if (numberOfCorrectAnswer >= 28) {
            updateAchievementById(user, 5);
        }
    }

    /**
     * update the achievements about articles when users read all the article a certain times
     * @param user the user that will be checked to update article achievement
     */
    public void updateArticleAchievement(GeneralUser user) {
        // get all the articles that the user read
        List<UserArticleRecord> userArticleList = userArticleRepository.findByGeneralUser(user);

        // if the user read all the articles more than 1, 3, 5, 10 times, he will get an achievement
        if (userArticleList.size() == articleRepository.count()) {
            int minimumOfTimes = Integer.MAX_VALUE;
            for (UserArticleRecord userArticle : userArticleList) {
                if (userArticle.getReadTimes() < minimumOfTimes) {
                    minimumOfTimes = userArticle.getReadTimes();
                }
            }

            if (minimumOfTimes >= 1) {
                updateAchievementById(user, 6);
            }

            if (minimumOfTimes >= 3) {
                updateAchievementById(user, 7);
            }

            if (minimumOfTimes >= 5) {
                updateAchievementById(user, 8);
            }

            if (minimumOfTimes >= 10) {
                updateAchievementById(user, 9);
            }
        }
    }

    /**
     * update all the achievement about game when user reach a certain score of a game
     * @param user the user that will be checked to update game achievement
     * @param game the game that will be checked to update game achievement
     */
    public void updateGameAchievement(GeneralUser user, Game game) {
        UserGameRecord userGameRecord = userGameRecordRepository.findByGeneralUserAndGame(user, game);

        // for shark game, if the user reach 300, 600, 900 scores, he will get an achievement
        if (game.getGameId() == 1) {
            if (userGameRecord.getScore() >= 300) {
                updateAchievementById(user, 10);
            }

            if (userGameRecord.getScore() >= 600) {
                updateAchievementById(user, 11);
            }

            if (userGameRecord.getScore() >= 900) {
                updateAchievementById(user, 12);
            }
        }

        // for pipe game, if the user has 30, 65, 100 seconds left before he finish the connection,
        // he will get an achievement
        if (game.getGameId() == 2) {
            if (userGameRecord.getScore() >= 30) {
                updateAchievementById(user, 13);
            }

            if (userGameRecord.getScore() >= 65) {
                updateAchievementById(user, 14);
            }

            if (userGameRecord.getScore() >= 100) {
                updateAchievementById(user, 15);
            }
        }

        // for memory game, if the user has 10, 20, 30 seconds left before he finish flipping all the cards,
        // he will get an achievement
        if (game.getGameId() == 3) {
            if (userGameRecord.getScore() >= 10) {
                updateAchievementById(user, 16);
            }

            if (userGameRecord.getScore() >= 20) {
                updateAchievementById(user, 17);
            }

            if (userGameRecord.getScore() >= 30) {
                updateAchievementById(user, 18);
            }
        }
    }

    /**
     * generate the list of AchievementDTO for the current logged-in user
     * @return the list of AchievementDTO for the current logged-in user
     */
    public List<AchievementDTO> getUserAchievements() {
        List<AchievementDTO> achievementDTOList = new ArrayList<>();

        // find the current logged-in user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        GeneralUser user = userRepository.findByUsername(currentPrincipalName);

        List<AchievementRecord> achievementRecordList = achievementRecordRepository.findByGeneralUser(user);
        for (AchievementRecord achievementRecord : achievementRecordList) {
            AchievementDTO achievementDTO = new AchievementDTO();
            Achievement achievement = achievementRecord.getAchievement();
            achievementDTO.setAchievementTitle(achievement.getAchievementTitle());
            achievementDTO.setAchievementDescription(achievement.getAchievementDescription());
            achievementDTO.setBadgeImageUrl(achievement.getBadgeImageUrl());
            achievementDTO.setUnlockDate(achievementRecord.getUnlockDate());
            achievementDTOList.add(achievementDTO);
        }

        return achievementDTOList;
    }

    /**
     * update an achievement for a user
     * @param user the user whose achievement will be updated
     * @param achievementId the achievement that will be updated
     */
    private void updateAchievementById(GeneralUser user, int achievementId) {
        // find the achievement record of a certain user and a certain achievement
        Achievement achievement = achievementRepository.findByAchievementId(achievementId);
        AchievementRecord achievementRecord
                = achievementRecordRepository.findByGeneralUserAndAchievement(user, achievement);
        // if the achievement the user has not got before, the record will be created for him
        if (achievementRecord == null) {
            achievementRecord = new AchievementRecord();
            achievementRecord.setGeneralUser(user);
            achievementRecord.setAchievement(achievement);
            achievementRecord.setUnlockDate(LocalDate.now());
            achievementRecordRepository.save(achievementRecord);
        }
    }
}
