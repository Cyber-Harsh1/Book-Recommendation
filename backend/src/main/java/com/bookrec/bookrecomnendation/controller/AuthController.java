package com.bookrec.bookrecomnendation.controller;

import com.bookrec.bookrecomnendation.model.User;
import com.bookrec.bookrecomnendation.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    // ---------------- SIGN UP ----------------
    @PostMapping("/signup")
    public Object signup(@RequestBody User user) {

        User saved = service.registerUser(user);

        if (saved == null) {
            return "Email already exists!";
        }

        return saved;  // returns created user (excluding password)
    }


    // ---------------- LOGIN ----------------
    @PostMapping("/login")
    public Object login(@RequestBody User user) {

        User loggedIn = service.login(user.getEmail(), user.getPassword());

        if (loggedIn == null) {
            return "Invalid email or password";
        }

        return loggedIn;  // sends user info to frontend
    }
}
