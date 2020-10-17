package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.UserAchievementDTO;
import oceanusproject.demov1.service.AchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/achievement")
@CrossOrigin
public class AchievementController {
    @Autowired
    AchievementService achievementService;

    @GetMapping("/getachievements")
    public UserAchievementDTO getUserAchievements() {
        return achievementService.getUserAchievements();
    }
}
