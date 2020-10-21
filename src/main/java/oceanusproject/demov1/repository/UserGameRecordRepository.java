package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.Game;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.UserGameRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserGameRecordRepository extends JpaRepository<UserGameRecord, Long> {
    List<UserGameRecord> findByGeneralUser(GeneralUser generalUser);

    UserGameRecord findByGeneralUserAndGame(GeneralUser generalUser, Game game);
}
