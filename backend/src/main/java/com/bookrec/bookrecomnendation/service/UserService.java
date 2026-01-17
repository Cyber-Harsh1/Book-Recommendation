package com.bookrec.bookrecomnendation.service;

import com.bookrec.bookrecomnendation.model.User;
import com.bookrec.bookrecomnendation.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // ---------------- SIGNUP ----------------
    public User registerUser(User user) {

        if (repo.findByEmail(user.getEmail()) != null) {
            return null;
        }

        User saved = repo.save(user);

        saved.setPassword(null); // never send password
        return saved;
    }

    // ---------------- LOGIN ----------------
    public User login(String email, String password) {

        User user = repo.findByEmail(email);

        if (user == null) {
            return null;
        }

        if (user.getPassword().equals(password)) {
            user.setPassword(null);
            return user;
        }

        return null;
    }
}
