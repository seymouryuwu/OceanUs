package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Article;
import oceanusproject.demov1.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Integer> {
    Game findByGameId(int gameId);

    List<Game> findAll();

    Game findByArticle(Article article);
}
