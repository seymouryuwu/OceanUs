package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.UserDTO;
import oceanusproject.demov1.error.UserAlreadyExistException;
import oceanusproject.demov1.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.validation.Valid;


@Controller
@CrossOrigin
public class PageController {
    @Autowired
    UserDetailsServiceImpl userService;

    @GetMapping
    public String getHomePage() {
        return "index";
    }

    @GetMapping("/content")
    public String getContentPageDefault(Model model) {
        model.addAttribute("articleId", 1);

        return "content";
    }

    @GetMapping("/content/{articleid}")
    //public String getContentPage(@PathVariable(name = "articleid") long articleId) {
    public String getContentPage(@PathVariable(name = "articleid") long articleId, Model model) {
        model.addAttribute("articleId", articleId);
        return "content";
    }

    @GetMapping("/map")
    public String getMapPage() {
        return "map";
    }

    @GetMapping("/about")
    public String getAboutUsPage() {
        return "about";
    }

    @GetMapping("/games")
    public String getGamePage() {
        return "games";
    }

    @GetMapping("/signup")
    public String getSignupPage(Model model) {
        UserDTO userDTO = new UserDTO();
        model.addAttribute("user", userDTO);
        return "signup";
    }

    @PostMapping("/signup")
    public String test(@Valid @ModelAttribute("user") UserDTO user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "signup";
        }
        try {
            userService.registerNewUserAccount(user);
        } catch (UserAlreadyExistException ex) {

        }


        return "about";
    }
}


