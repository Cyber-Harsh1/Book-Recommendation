package com.bookrec.bookrecomnendation.service;

import com.bookrec.bookrecomnendation.model.Book;
import com.bookrec.bookrecomnendation.model.User;
import com.bookrec.bookrecomnendation.repository.BookRepository;
import com.bookrec.bookrecomnendation.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecommendationService {

    private final UserRepository userRepo;
    private final BookRepository bookRepo;

    public RecommendationService(UserRepository userRepo, BookRepository bookRepo) {
        this.userRepo = userRepo;
        this.bookRepo = bookRepo;
    }

    public List<Book> getRecommendedBooks(Long userId) {
        // Get user
        User user = userRepo.findById(userId).orElse(null);

        // ❗ If user does not exist → return empty list
        if (user == null) {
            return Collections.emptyList();
        }

        // ❗ If user has no preferred genres → return empty list (Option 1)
        if (user.getPreferredGenres() == null || user.getPreferredGenres().isEmpty()) {
            return Collections.emptyList();
        }

        // Get user's selected genres
        List<String> genres = user.getPreferredGenres();

        // Filter books based on the genres selected
        return bookRepo.findAll()
                .stream()
                .filter(book -> genres.contains(book.getGenre()))
                .collect(Collectors.toList());
    }
}
