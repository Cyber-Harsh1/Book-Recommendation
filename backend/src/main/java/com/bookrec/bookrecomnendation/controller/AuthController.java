package com.bookrec.bookrecomnendation.controller;

import com.bookrec.bookrecomnendation.model.User;
import com.bookrec.bookrecomnendation.service.UserService;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.Map;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "https://book-recommendation-7r8lpnmdo-cyber-harsh1s-projects.vercel.app",
        allowedHeaders = "*",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS},
        allowCredentials = "true")
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    // ---------------- SIGN UP ----------------
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {

        User saved = service.registerUser(user);

        if (saved == null) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Email already exists"));
        }

        return ResponseEntity.ok(saved);
    }


    // ---------------- LOGIN ----------------
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        User loggedIn = service.login(user.getEmail(), user.getPassword());

        if (loggedIn == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password"));
        }

        return ResponseEntity.ok(loggedIn);
    }
}
