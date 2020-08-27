package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.ArticleDTO;
import oceanusproject.demov1.dto.SectionDTO;
import oceanusproject.demov1.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@RestController
@RequestMapping("/article")
@Validated
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
    public ArticleDTO getArticle(@RequestParam(value = "articleId") @Min(1) @Max(100) long articleId) {
        return articleService.getArticle(articleId);
    }

    @GetMapping("/getsection")
    public SectionDTO getSection(@RequestParam(value = "sectionId") @Min(1) @Max(100) long sectionId) {
        return articleService.getSection(sectionId);
    }
}
