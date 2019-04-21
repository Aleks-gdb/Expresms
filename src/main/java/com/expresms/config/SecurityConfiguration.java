package com.expresms.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

        protected void configure(HttpSecurity http) throws Exception {
            http
                    .cors().and()
                    .csrf().disable()
                    .authorizeRequests()
                    .antMatchers("/", "/login", "/register").permitAll()
                    .antMatchers(HttpMethod.PUT, "/").permitAll()
                    .antMatchers(HttpMethod.POST, "/").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .httpBasic();
        }

    @Bean
    @Override
    public UserDetailsService userDetailsService() {
        UserDetails user =
                User.withDefaultPasswordEncoder()
                        .username("user")
                        .password("password")
                        .roles("USER")
                        .build();

        return new InMemoryUserDetailsManager(user);
    }

}