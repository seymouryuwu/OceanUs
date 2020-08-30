package oceanusproject.demov1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
@CrossOrigin
public class PageController {
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
}


