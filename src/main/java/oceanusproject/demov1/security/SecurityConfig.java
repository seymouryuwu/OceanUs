package oceanusproject.demov1.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Comment this line when you test on local
        http.requiresChannel().anyRequest().requiresSecure();

        //http.csrf().disable();
        http
                .authorizeRequests()
                .antMatchers("/**").permitAll()
                .antMatchers("/").permitAll()
                .antMatchers("/adventurequiz").permitAll()
                .antMatchers("/adventurequiz/**").permitAll()
                .antMatchers("/ending").permitAll()
                .antMatchers("/explore").permitAll()
                .antMatchers("/games").permitAll()
                .antMatchers("/ourstory").permitAll()
                .antMatchers("/article/**").permitAll()
                .antMatchers("/image/**").permitAll()
                .antMatchers("/quiz/**").permitAll()
                .antMatchers("/signup").permitAll()
                .antMatchers("/sharkvsrubbish").permitAll()
                .antMatchers("/suziestoosies").permitAll()
                .antMatchers("/cloggedmemory").permitAll()
                .antMatchers("/css/**").permitAll()
                .antMatchers("/js/**").permitAll()
                .antMatchers("/images/**").permitAll()
                .antMatchers("/fonts/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .successForwardUrl("/profile")
                .failureForwardUrl("/login_failure")
                .permitAll()
                .and()
                .logout()
                .logoutUrl("/logout")
                .invalidateHttpSession(true)
                .logoutSuccessUrl("/login")
                .permitAll();

    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authProvider() {
        final DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
}
