package com.bookrec.bookrecomnendation.controller;

import com.bookrec.bookrecomnendation.model.Book;
import com.bookrec.bookrecomnendation.repository.BookRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*") // allows frontend (JS) to call backend
public class BookController {

    private final BookRepository repo;

    public BookController(BookRepository repo) {
        this.repo = repo;
    }

    // Get all books
    @GetMapping
    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    // Add new book
    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return repo.save(book);
    }

    // 🔍 Search books by keyword (title, author, or genre)
    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String keyword) {
        return repo.searchBooks(keyword.toLowerCase());
    }
}
