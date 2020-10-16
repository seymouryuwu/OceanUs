package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.UserDTO;
import oceanusproject.demov1.error.UserAlreadyExistException;
import oceanusproject.demov1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;


@Controller
@CrossOrigin
public class PageController {
    @Autowired
    UserService userService;

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

    @GetMapping("/sharkvsrubbish")
    public String getSharkGamePage() {
        return "sharkvsrubbish";
    }

    @GetMapping("/suziestoosies")
    public String getPipePage() {
        return "suziestoosies";
    }

    @GetMapping("/cloggedmemory")
    public String getMemoryPage() {
        return "cloggedmemory";
    }

    @GetMapping("/signup")
    public String getSignupPage(Model model) {
        UserDTO userDTO = new UserDTO();
        model.addAttribute("user", userDTO);
        return "signup";
    }

    @PostMapping("/signup")
    public String signUp(@Valid @ModelAttribute("user") UserDTO user, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            return "signup";
        }
        try {
            userService.registerNewUserAccount(user);
        } catch (UserAlreadyExistException ex) {
            model.addAttribute("message", ex.getMessage());
            return "signup";
        }
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String getLoginPage(Model model) {
        return "login";
    }

    @PostMapping("/login_success")
    public String loginSuccess(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        model.addAttribute("username", currentPrincipalName);
        return "loginSuccessfully";
    }

    @PostMapping("/login_failure")
    public String loginFailure(Model model) {
        model.addAttribute("message", "Invalid user account or password");
        return "login";
    }

}


