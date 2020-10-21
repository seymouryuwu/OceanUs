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

    public void updateQuizAchievement(GeneralUser user) {
        long numberOfCorrectAnswer = userQuizRecordRepository.countByGeneralUserAndAnswerResult(user, true);

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

    public void updateArticleAchievement(GeneralUser user) {
                List<UserArticleRecord> userArticleList = userArticleRepository.findByGeneralUser(user);
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

    public void updateGameAchievement(GeneralUser user, Game game) {
        UserGameRecord userGameRecord = userGameRecordRepository.findByGeneralUserAndGame(user, game);
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

    public List<AchievementDTO> getUserAchievements() {
        List<AchievementDTO> achievementDTOList = new ArrayList<>();
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

    private void updateAchievementById(GeneralUser user, int achievementId) {
        Achievement achievement = achievementRepository.findByAchievementId(achievementId);
        AchievementRecord achievementRecord
                = achievementRecordRepository.findByGeneralUserAndAchievement(user, achievement);
        if (achievementRecord == null) {
            achievementRecord = new AchievementRecord();
            achievementRecord.setGeneralUser(user);
            achievementRecord.setAchievement(achievement);
            achievementRecord.setUnlockDate(LocalDate.now());
            achievementRecordRepository.save(achievementRecord);
        }
    }
}
