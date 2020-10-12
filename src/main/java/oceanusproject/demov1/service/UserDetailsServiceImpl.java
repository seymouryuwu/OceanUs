package oceanusproject.demov1.service;

import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.model.MyUserDetails;
import oceanusproject.demov1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        GeneralUser generalUser = userRepository.findByEmail(email);
        if (generalUser == null) {
            throw new UsernameNotFoundException("Could not find user " + email);
        }

        return new MyUserDetails(generalUser);
    }
}
