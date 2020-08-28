package oceanusproject.demov1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@CrossOrigin
public class PageController {
    @GetMapping
    public String getHomePage() {
        return "index";
    }

    @GetMapping("/content")
    public String getContentPage() {
        return "content";
    }

    @GetMapping("/map")
    public String getMapPage() {
        return "map";
    }
}


