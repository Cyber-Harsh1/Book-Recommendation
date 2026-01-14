package com.bookrec.bookrecomnendation.service;

import com.bookrec.bookrecomnendation.model.User;
import com.bookrec.bookrecomnendation.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // SIGNUP
    public User registerUser(User user) {

        if (repo.findByEmail(user.getEmail()) != null) {
            return null; // email already exists
        }

        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    // LOGIN
    public User login(String email, String password) {

        User user = repo.findByEmail(email);

        if (user != null && encoder.matches(password, user.getPassword())) {
            return user;
        }

        return null;
    }
}
