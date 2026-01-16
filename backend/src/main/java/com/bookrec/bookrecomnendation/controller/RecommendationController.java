package com.bookrec.bookrecomnendation.controller;

import com.bookrec.bookrecomnendation.model.Book;
import com.bookrec.bookrecomnendation.service.RecommendationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommend")
@CrossOrigin(origins = "book-recommendation-7r8lpnmdo-cyber-harsh1s-projects.vercel.app")
public class RecommendationController {

    private final RecommendationService service;

    public RecommendationController(RecommendationService service) {
        this.service = service;
    }

    @GetMapping("/user/{userId}")
    public List<Book> recommend(@PathVariable Long userId) {
        return service.getRecommendedBooks(userId);
    }
}
