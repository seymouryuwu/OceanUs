package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.ArticleDTO;
import oceanusproject.demov1.dto.SectionDTO;
import oceanusproject.demov1.model.Article;
import oceanusproject.demov1.model.Section;
import oceanusproject.demov1.repository.ArticleRepository;
import oceanusproject.demov1.repository.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private SectionRepository sectionRepository;

    // this method is used to get the text content of all the sections of one article
    public ArticleDTO getArticle(long articleId) {
        ArticleDTO articleDTO = new ArticleDTO();
        Article article = articleRepository.findByArticleId(articleId);
        articleDTO.setArticleId(articleId);
        articleDTO.setArticleTitle(article.getArticleTitle());

        List<Section> sections = sectionRepository.findByArticle(article);
        List<SectionDTO> sectionDTOList = new ArrayList<>();
        for (Section s : sections) {
            SectionDTO newSectionDTO = new SectionDTO();
            newSectionDTO.setSectionId(s.getSectionId());
            newSectionDTO.setSectionSequenceNumber(s.getSectionSequenceNumber());
            newSectionDTO.setSectionHeader(s.getSectionHeader());
            newSectionDTO.setSectionText(s.getSectionText());
            newSectionDTO.setHasQuiz(s.isHasQuiz());
            newSectionDTO.setImageUrl(s.getImageUrl());
            newSectionDTO.setImageAlignment(s.getImageAlignment());
            sectionDTOList.add(newSectionDTO);
        }

        articleDTO.setSectionDTOList(sectionDTOList);
        return articleDTO;
    }

    // this method will return a particular section
    public SectionDTO getSection(long sectionId) {
        SectionDTO sectionDTO = new SectionDTO();
        Section section = sectionRepository.findBySectionId(sectionId);
        sectionDTO.setSectionId(section.getSectionId());
        sectionDTO.setSectionSequenceNumber(section.getSectionSequenceNumber());
        sectionDTO.setSectionHeader(section.getSectionHeader());
        sectionDTO.setSectionText(section.getSectionText());
        sectionDTO.setHasQuiz(section.isHasQuiz());
        sectionDTO.setImageUrl(section.getImageUrl());
        sectionDTO.setImageAlignment(section.getImageAlignment());

        return sectionDTO;
    }
}
