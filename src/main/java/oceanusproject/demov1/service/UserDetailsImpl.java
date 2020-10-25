package oceanusproject.demov1.service;

import oceanusproject.demov1.model.GeneralUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

/**
 * a class implements UserDetails to be used by spring security
 */
public class UserDetailsImpl implements UserDetails {

    private GeneralUser generalUser;

    public UserDetailsImpl(GeneralUser generalUser) {
        this.generalUser = generalUser;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("generalUser");
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return generalUser.getPassword();
    }

    @Override
    public String getUsername() {
        return generalUser.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
