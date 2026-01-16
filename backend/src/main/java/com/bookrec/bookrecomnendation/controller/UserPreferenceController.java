package com.bookrec.bookrecomnendation.controller;

import com.bookrec.bookrecomnendation.model.User;
import com.bookrec.bookrecomnendation.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "book-recommendation-7r8lpnmdo-cyber-harsh1s-projects.vercel.app")
public class UserPreferenceController {

    private final UserRepository userRepo;

    public UserPreferenceController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    // Save or update preferred genres USING USER ID
    @PostMapping("/{id}/preferences")
    public User savePreferences(@PathVariable Long id, @RequestBody List<String> genres) {
        User user = userRepo.findById(id).orElse(null);
        if (user == null) return null;

        user.setPreferredGenres(genres);
        return userRepo.save(user);
    }

    // Get preferences using user ID
    @GetMapping("/{id}/preferences")
    public List<String> getPreferences(@PathVariable Long id) {
        User user = userRepo.findById(id).orElse(null);
        return user != null ? user.getPreferredGenres() : null;
    }
}
