package oceanusproject.demov1.service;

import oceanusproject.demov1.dto.UserDTO;
import oceanusproject.demov1.error.UserAlreadyExistException;
import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.MyUserDetails;
import oceanusproject.demov1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        GeneralUser generalUser = userRepository.findByEmail(email);
        if (generalUser == null) {
            throw new UsernameNotFoundException("Could not find user");
        }

        return new MyUserDetails(generalUser);
    }

    @Transactional
    public void registerNewUserAccount(UserDTO userDTO)
            throws UserAlreadyExistException {

        if (emailExist(userDTO.getEmail())) {
            throw new UserAlreadyExistException(
                    "There is an account with that email address: " + userDTO.getEmail());
        }

        // the rest of the registration operation
    }

    private boolean emailExist(String email) {
        return userRepository.findByEmail(email) != null;
    }
}
