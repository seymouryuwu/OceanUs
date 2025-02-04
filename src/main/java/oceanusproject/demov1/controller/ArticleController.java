package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.ArticleDTO;
import oceanusproject.demov1.dto.SectionDTO;
import oceanusproject.demov1.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

/**
 * Rest API for article
 */
@RestController
@RequestMapping("/article")
@Validated
@CrossOrigin
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    /**
     * get the article content
     * @param articleId the article id
     * @return the ArticleDTO
     */
    @GetMapping("/getarticle")
    public ArticleDTO getArticle(@RequestParam(value = "articleId") @Min(1) @Max(14) long articleId) {
        return articleService.getArticle(articleId);
    }

    /**
     * get the section content
     * @param sectionId the section id
     * @return the SectionDTO
     */
    @GetMapping("/getsection")
    public SectionDTO getSection(@RequestParam(value = "sectionId") @Min(1) @Max(47) long sectionId) {
        return articleService.getSection(sectionId);
    }
}
