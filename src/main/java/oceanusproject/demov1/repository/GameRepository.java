package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Article;
import oceanusproject.demov1.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * This repository defines all the operations of Entity Game
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface GameRepository extends JpaRepository<Game, Integer> {
    /**
     * find an game by game id.
     * @param gameId an game id that is used to search
     * @return the game that is found
     */
    Game findByGameId(int gameId);

    /**
     * find all the games.
     * @return the list of all the games
     */
    List<Game> findAll();

    /**
     * find an game by article
     * @param article an article that has game after answering its quiz
     * @return the game that will be places after the article
     */
    Game findByArticle(Article article);
}
