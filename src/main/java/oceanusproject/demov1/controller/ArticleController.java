package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.ArticleDTO;
import oceanusproject.demov1.dto.SectionDTO;
import oceanusproject.demov1.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    ArticleService articleService;

    /*
    @PostMapping("/postarticle")
    public Article postArticle(@Valid @RequestBody Article article) {
        return articleRepository.save(article);
    }

     */

    @GetMapping("/getarticle")
    public ArticleDTO getArticle(@Valid @RequestParam(value = "articleId") long articleId) {
        return articleService.getArticle(articleId);
    }

    @GetMapping("/getsection")
    public SectionDTO getSection(@Valid @RequestParam(value = "sectionId") long sectionId) {
        return articleService.getSection(sectionId);
    }
}
