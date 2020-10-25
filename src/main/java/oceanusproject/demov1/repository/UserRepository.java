package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.GeneralUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * This repository defines all the operations of Entity GeneralUser
 * @author Seymour Yu Wu
 * @version 1.0
 * @since 1.0
 */
@Repository
public interface UserRepository extends JpaRepository<GeneralUser, String> {
    /**
     * find a user by username
     * @param username the username that is used to search
     * @return the user found
     */
    GeneralUser findByUsername(String username);
}
