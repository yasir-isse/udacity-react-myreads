import React from "react";
import Book from "./Book";

function BookShelf({ title, books, handleShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {title !== "none"
            ? books
                .filter(
                  (item) =>
                    item.shelf.toLowerCase() ===
                    title.replaceAll(" ", "").toLowerCase()
                )
                .map((book, index) => {
                  return (
                    <Book
                      key={index}
                      cover={`${book.imageLinks.thumbnail}`}
                      title={book.title}
                      author={book.authors}
                      bookShelf={book.shelf}
                      id={book.id}
                      handleShelfChange={handleShelfChange}
                    />
                  );
                })
            : books.map((book, index) => {
                return (
                  <Book
                    key={index}
                    cover={`${book.imageLinks.thumbnail}`}
                    title={book.title}
                    author={book.authors}
                    bookShelf={title}
                    id={book.id}
                    handleShelfChange={handleShelfChange}
                  />
                );
              })}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
