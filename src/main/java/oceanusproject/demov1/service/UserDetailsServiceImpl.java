package oceanusproject.demov1.service;

import oceanusproject.demov1.model.GeneralUser;
import oceanusproject.demov1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * a class implements UserDetailsService to be used by spring security
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        GeneralUser generalUser = userRepository.findByUsername(username);
        if (generalUser == null) {
            throw new UsernameNotFoundException("Could not find user " + username);
        }

        return new UserDetailsImpl(generalUser);
    }
}
