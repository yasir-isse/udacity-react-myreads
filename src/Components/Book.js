import React from "react";
import BookShelfChanger from "./BookShelfChanger";

function Book({ cover, title, author, bookShelf, handleShelfChange, id }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 190,
              backgroundImage: `url("${cover}")`,
            }}
          />
          <BookShelfChanger
            id={id}
            bookShelf={bookShelf}
            handleShelfChange={handleShelfChange}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
}

export default Book;
