const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const BookStore = require("./models/BookModel");
const { log } = require("console");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MongoDB bağlantısı
mongoose
  .connect("mongodb+srv://NARLA:237314@cluster1.osadcyv.mongodb.net/")
  .then(() => log("MongoDB bağlantısı başarılı."))
  .catch((err) => log("MongoDB bağlantı hatası:", err));

// GET – Books
app.get("/books", (req, res) => {
  BookStore.find()
    .then((books) => res.json(books))
    .catch((err) => log(err));
});

// POST – New Book
app.post("/newbook", async (req, res) => {
  try {
    const newBook = new BookStore(req.body);
    const book = await newBook.save();
    res.status(201).json(book);
  } catch (err) {
    log(err);
  }
});

// DELETE – Book
app.delete("/delete/:id", async (req, res) => {
  try {
    await BookStore.findByIdAndDelete(req.params.id);
    res.json("Book deleted successfully");
  } catch (err) {
    log(err);
  }
});

// BORROW – quantity -1
app.put("/borrow/:id", async (req, res) => {
  try {
    const book = await BookStore.findById(req.params.id);
    if (!book) return res.status(404).json("Book not found");
    if (book.quantity <= 0) return res.status(400).json("Out of stock");

    book.quantity -= 1;
    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json("Borrow failed");
  }
});

// RETURN – quantity +1
app.put("/return/:id", async (req, res) => {
  try {
    const book = await BookStore.findById(req.params.id);
    if (!book) return res.status(404).json("Book not found");

    book.quantity += 1;
    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json("Return failed");
  }
});

app.listen(5000, () => {
  console.log("SERVER çalışıyor.");
});
