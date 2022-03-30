import React from "react";
import Book from "./Book";

function BookShelf({ title, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(
              (item) =>
                item.shelf.toLowerCase() ===
                title.replaceAll(" ", "").toLowerCase()
            )
            .map((book) => {
              return (
                <Book
                  key={book.id}
                  cover={`${book.imageLinks[0]}`}
                  title={book.title}
                  author={book.authors}
                />
              );
            })}
          )
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
