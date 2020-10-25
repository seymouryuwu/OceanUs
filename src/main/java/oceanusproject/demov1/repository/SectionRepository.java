package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Article;
import oceanusproject.demov1.model.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * This repository defines all the operations of Entity Section
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {
    /**
     * find a list of sections belong to an article
     * @param article the article that is used to search
     * @return the list of sections belong to the article
     */
    List<Section> findByArticle(Article article);

    /**
     * find a section by section id
     * @param sectionId //TO DO
     * @return
     */
    Section findBySectionId(long sectionId);
}
