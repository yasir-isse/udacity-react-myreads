import React, { useState, useEffect } from "react";
import "./App.css";
import * as BooksApi from "./BooksAPI";
import SearchPage from "./Components/SearchPage";
import Header from "./Components/Header";
import BookShelf from "./Components/BookShelf";
import { Link } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    BooksApi.getAll().then((res) => setBooks([...res]));
  }, []);

  const handleShelfChange = (e) => {
    books.map((book) => {
      if (book.id === e.target.id) {
        book.shelf = e.target.value;
        BooksApi.update(book, e.target.value).then((res) =>
          setBooks([...books])
        );
      }
    });
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BooksApi.search(query).then((res) => {
      setSearchBooks([...res]);
    });
  };
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          searchBooks={searchBooks}
          setShow={setShowSearchPage}
          query={query}
          handleQuery={handleQuery}
          handleSubmit={handleSubmit}
          handleShelfChange={handleShelfChange}
        />
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <BookShelf
              title={"Currently Reading"}
              books={books}
              handleShelfChange={handleShelfChange}
            />
            <BookShelf
              title={"Want to Read"}
              books={books}
              handleShelfChange={handleShelfChange}
            />
            <BookShelf
              title={"Read"}
              books={books}
              handleShelfChange={handleShelfChange}
            />
          </div>
          <div className="open-search">
            <Link to="search">
              <button onClick={() => setShowSearchPage(true)}>
                Add a book
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
