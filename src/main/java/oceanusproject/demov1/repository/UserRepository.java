package oceanusproject.demov1.repository;

import oceanusproject.demov1.model.GeneralUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<GeneralUser, String> {
    GeneralUser findByUsername(String username);
}
