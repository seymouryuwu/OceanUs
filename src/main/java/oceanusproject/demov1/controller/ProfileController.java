package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.UserProfileDTO;
import oceanusproject.demov1.repository.UserRepository;
import oceanusproject.demov1.service.AchievementService;
import oceanusproject.demov1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class ProfileController {
    @Autowired
    UserService userService;

    @GetMapping("/getprofiledata")
    public UserProfileDTO getUserProfileData() {
        return userService.getProfileDTO();
    }

    @PostMapping("/setnickname")
    public ResponseEntity setNickname(@RequestBody String nickname) {
        userService.setNickname(nickname);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
