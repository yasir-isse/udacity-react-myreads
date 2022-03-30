import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

function SearchPage({
  setShow,
  query,
  handleQuery,
  handleSubmit,
  searchBooks,
}) {
  return (
    <div className="search-books">
      <form onSubmit={handleSubmit} className="search-books-bar">
        <Link to="/">
          <button
            type="button"
            className="close-search"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={handleQuery}
          />
        </div>
        <button type="submit">Search</button>
      </form>

      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks &&
            searchBooks.map((book) => {
              return (
                <Book
                  key={book.id}
                  cover={() => book.imageLinks.thumbnail || book.imageLinks}
                  title={book.title}
                  author={book.author}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
