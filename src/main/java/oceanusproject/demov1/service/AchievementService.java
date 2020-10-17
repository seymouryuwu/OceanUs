package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.AchievementDTO;
import oceanusproject.demov1.dto.UserAchievementDTO;
import oceanusproject.demov1.model.Achievement;
import oceanusproject.demov1.model.AchievementRecord;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
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

        if (numberOfCorrectAnswer >= 5) {
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

        if (numberOfCorrectAnswer >= 10) {
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

        if (numberOfCorrectAnswer >= 15) {
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
    }

    public UserAchievementDTO getUserAchievements() {
        UserAchievementDTO userAchievementDTO = new UserAchievementDTO();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentPrincipalName = authentication.getName();
            GeneralUser user = userRepository.findByUsername(currentPrincipalName);
            userAchievementDTO.setUsername(currentPrincipalName);

            List<AchievementDTO> achievementDTOList = new ArrayList<>();
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
            userAchievementDTO.setAchievementDTOList(achievementDTOList);
        }
        return userAchievementDTO;
    }
}
