package com.bookrec.bookrecomnendation.repository;

import com.bookrec.bookrecomnendation.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    // Search by title, author, or genre (case-insensitive)
    @Query("SELECT b FROM Book b WHERE LOWER(b.title) LIKE %:keyword% " +
            "OR LOWER(b.author) LIKE %:keyword% " +
            "OR LOWER(b.genre) LIKE %:keyword%")
    List<Book> searchBooks(@Param("keyword") String keyword);
}
