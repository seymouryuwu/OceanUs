package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Game;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.UserGameRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * This repository defines all the operations of Entity UserGameRecord
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
public interface UserGameRecordRepository extends JpaRepository<UserGameRecord, Long> {
    /**
     * find a list of user game record by user
     * @param generalUser the user that is used to search
     * @return the list of user game records
     */
    List<UserGameRecord> findByGeneralUser(GeneralUser generalUser);

    /**
     * find a user game record by user and game
     * @param generalUser the user that is used to search
     * @param game the game that is used to search
     * @return the user game record found
     */
    UserGameRecord findByGeneralUserAndGame(GeneralUser generalUser, Game game);
}
