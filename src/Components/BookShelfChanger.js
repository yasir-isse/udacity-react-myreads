import React, { useState } from "react";

function BookShelfChanger({ bookShelf, handleShelfChange, id }) {
  return (
    <div className="book-shelf-changer">
      <select value={bookShelf} onChange={handleShelfChange} id={id}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
