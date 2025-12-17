import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    publishYear: "",
    department: "",
    description: "",
    commments: "",
    coverImage: "",
    quantity: 1,
  });

  useEffect(() => {
    fetch("/books")
      .then((res) => res.json())
      .then((jsonRes) => setBooks(jsonRes));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // ADD BOOK
  const addBook = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/newbook", book);

      setBooks((prevBooks) => [...prevBooks, res.data]);

      alert(`Book "${book.bookName}" added successfully`);

      setBook((prevBook) => ({
        ...prevBook,
        bookName: "",
        authorName: "",
        publishYear: "",
        department: "",
        description: "",
        commments: "",
        coverImage: "",
        quantity: 1,
      }));
    } catch (err) {
      console.error("Add book error:", err);
    }
  };

  const getShortId = (id) => id.toString().slice(-6);

  // VIEW
  const viewBook = (book) => {
    alert(`
Book: ${book.bookName}
Author: ${book.authorName}
Year: ${book.publishYear}
Department: ${book.department}
Quantity: ${book.quantity}
    `);
  };

  // DELETE ✅ (STATE GÜNCELLENDİ)
  const deleteBook = async (id, bookName) => {
    const shortId = getShortId(id);

    const isConfirmed = window.confirm(
      `${shortId} ID'li kitap "${bookName}" silinecek. Devam etmek istiyor musunuz?`
    );

    if (!isConfirmed) {
      alert("Silme işlemi iptal edildi");
      return;
    }

    try {
      await axios.delete(`/delete/${id}`);

      setBooks((prevBooks) =>
        prevBooks.filter((b) => b._id !== id)
      );

      alert(`${shortId} ID'li kitap "${bookName}" deleted`);
    } catch (error) {
      console.error(error);
      alert("Kitap silinirken hata oluştu");
    }
  };

  // BORROW ✅ (quantity -1)
  const borrowBook = async (id, bookName) => {
    const targetBook = books.find((b) => b._id === id);
    if (!targetBook || targetBook.quantity <= 0) return;

    try {
      const res = await axios.put(`/borrow/${id}`);
      const shortId = getShortId(id);

      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b._id === id ? res.data : b
        )
      );

      alert(`🟢 ${shortId} ID'li kitap 👉 "${bookName}" 👈 lended`);
    } catch (err) {
      console.error("Borrow error:", err);
    }
  };

  // RETURN ✅ (quantity +1)
  const returnBook = async (id, bookName) => {
    try {
      const res = await axios.put(`/return/${id}`);
      const shortId = getShortId(id);

      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b._id === id ? res.data : b
        )
      );

      alert(`🟢 ${shortId} ID'li kitap 👉 "${bookName}" 👈 back`);
    } catch (err) {
      console.error("Return error:", err);
    }
  };

  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          {/* LOGO / BRAND */}
          <button className="navbar-brand btn btn-link p-0 fw-bold" onClick={() => navigate("/")}>
            Leaf & Spine
          </button>

          {/* MOBILE TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* MAIN PAGE */}
              <li className="nav-item">
                <button className="nav-link active btn btn-link" onClick={() => navigate("/explore")}>
                  Explore Books
                </button>
              </li>

              {/* ADD NEW BOOK */}
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => navigate("/publish")}
                >
                  Publish New Title
                </button>
              </li>

              {/* CATEGORIES */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover Genres
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">
                      📚 New Arrivals
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      🔥 Best Sellers
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      ⭐ Editor’s Top Picks
                    </button>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li>
                    <button className="dropdown-item">
                      🎧 Audiobook Collection
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      📖 Curated Reading Lists
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      🧠 Book Club Selections
                    </button>
                  </li>
                </ul>
              </li>

              {/* ABOUT SECTION */}
              <li className="nav-item">
                <button className="nav-link btn btn-link">
                  About Us
                </button>
              </li>

            </ul>

            {/* SEARCH */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search books, authors..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route
          path="/explore"
          element={
            <Books
              books={books}
              viewBook={viewBook}
              borrowBook={borrowBook}
              returnBook={returnBook}
              deleteBook={deleteBook}
            />
          }
        />

        <Route
          path="/publish"
          element={
            <AddBook
              book={book}
              handleChange={handleChange}
              addBook={addBook}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
