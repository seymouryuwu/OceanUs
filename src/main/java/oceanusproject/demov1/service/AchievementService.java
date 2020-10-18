package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.AchievementDTO;
import oceanusproject.demov1.dto.UserProfileDTO;
import oceanusproject.demov1.model.Achievement;
import oceanusproject.demov1.model.AchievementRecord;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.UserArticle;
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

    public void updateQuizAchievement() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        GeneralUser user = userRepository.findByUsername(currentPrincipalName);
        long numberOfCorrectAnswer = userQuizRecordRepository.countByGeneralUserAndAnswerResult(user, true);

        if (numberOfCorrectAnswer >= 1) {
            Achievement achievement = achievementRepository.findByAchievementId(1);
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

        if (numberOfCorrectAnswer >= 7) {
            Achievement achievement = achievementRepository.findByAchievementId(2);
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

        if (numberOfCorrectAnswer >= 14) {
            Achievement achievement = achievementRepository.findByAchievementId(3);
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

        if (numberOfCorrectAnswer >= 21) {
            Achievement achievement = achievementRepository.findByAchievementId(4);
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

        if (numberOfCorrectAnswer >= 28) {
            Achievement achievement = achievementRepository.findByAchievementId(5);
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

    public void updateArticleAchievement() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        GeneralUser user = userRepository.findByUsername(currentPrincipalName);

        List<UserArticle> userArticleList = userArticleRepository.findByGeneralUser(user);
        if (userArticleList.size() == articleRepository.count()) {
            int minimumOfTimes = 100;
            for (UserArticle userArticle : userArticleList) {
                if (userArticle.getReadTimes() < minimumOfTimes) {
                    minimumOfTimes = userArticle.getReadTimes();
                }
            }

            if (minimumOfTimes >= 1) {
                Achievement achievement = achievementRepository.findByAchievementId(6);
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

            if (minimumOfTimes >= 3) {
                Achievement achievement = achievementRepository.findByAchievementId(7);
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

            if (minimumOfTimes >= 5) {
                Achievement achievement = achievementRepository.findByAchievementId(8);
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
}
