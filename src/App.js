import React, { useState, useEffect } from "react";
import "./App.css";
import * as BooksApi from "./BooksAPI";
import SearchPage from "./Components/SearchPage";
import Header from "./Components/Header";
import Book from "./Components/Book";
import BookShelf from "./Components/BookShelf";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksApi.getAll().then((res) => setBooks([...res]));
  }, []);
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage setShow={setShowSearchPage} />
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <BookShelf title={"Currently Reading"} books={books} />
            <BookShelf title={"Want to Read"} books={books} />
            <BookShelf title={"Read"} books={books} />
          </div>
          <div className="open-search">
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
