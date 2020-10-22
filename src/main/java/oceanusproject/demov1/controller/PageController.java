package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.UserDTO;
import oceanusproject.demov1.error.UserAlreadyExistException;
import oceanusproject.demov1.service.ArticleService;
import oceanusproject.demov1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;


@Controller
@CrossOrigin
public class PageController {
    @Autowired
    UserService userService;

    @Autowired
    ArticleService articleService;

    @GetMapping
    public String getHomePage(Model model) {
        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        return "index";
    }

    @GetMapping("/content")
    public String getContentPageDefault(Model model) {
        //model.addAttribute("articleId", 1);
        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        model.addAttribute("articleCount", articleService.countArticle());
        return "content";
    }

    @GetMapping("/quizinstruction")
    public String getQuizInstruction(Model model) {
        return "instruction";
    }

    @GetMapping("/content/{articleid}")
    public String getContentPage(@PathVariable(name = "articleid") long articleId, Model model) {
        //TO DO validation for article ID

        model.addAttribute("articleId", articleId);
        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        model.addAttribute("articleCount", articleService.countArticle());

        articleService.updateArticleReadingTimes(articleId);
        return "content";
    }

    @GetMapping("/map")
    public String getMapPage(Model model) {
        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        return "map";
    }

    @GetMapping("/about")
    public String getAboutUsPage(Model model, ServletRequest servletRequest) {
        CsrfToken token = (CsrfToken) servletRequest.getAttribute("_csrf");


        System.out.println(token.getHeaderName());
        System.out.println(token.getParameterName());
        System.out.println(token.getToken());

        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        return "about";
    }

    @GetMapping("/games")
    public String getGamePage(Model model) {
        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        //List<Boolean> unlockGameList = //TO DO
        //model.addAttribute("unlockList", unlockGameList);
        return "games";
    }

    @GetMapping("/sharkvsrubbish")
    public String getSharkGamePage(HttpServletRequest httpServletRequest) {
        System.out.println(httpServletRequest.getRequestURI());
        //To do
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
        SecurityContextHolder.clearContext();
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String getLoginPage(Model model) {
        if (userService.checkIfLoggedIn()) {
            return "redirect:/profile";
        }
        return "login";
    }

    @GetMapping("/login_success")
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

    @PostMapping("/profile")
    public String profilePage(Model model) {
        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        return "profile";
    }

    @GetMapping("/profile")
    public String getProfilePage(Model model) {
        model.addAttribute("isLoggedIn", userService.checkIfLoggedIn());
        return "profile";
    }
}
