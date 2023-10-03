import express from "express";
import { Book } from "../models/bookModel.js";

const Router = express.Router();

// POST request
Router.post("/", async (req, res) => {
  try {
    // Validating the request parameters
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(404).send({ message: "Invalid request body" });
    }

    // converting request body to object
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    // create a book object from the bookModel
    const book = await Book.create(newBook);

    // return the result to the client (showing the book)
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

// GET request (All books)
Router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

// GET request (ByID book)
Router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    return res.status(200).json({ book });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

// PUT request
Router.put("/:id", async (req, res) => {
  try {
    // body params validation
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(404).send({ message: "Invalid request body" });
    }
    // find and update
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    // result validation
    if (!result) {
      return res.status(404).send({ message: "Invalid request body" });
    } else {
      return res.status(200).send({ message: "Book updated successfully" });
    }
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

// DELETE request
Router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "Invalid request body" });
    } else {
      return res.status(200).send({ message: "Book Deleted successfully" });
    }
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ massage: error.massage });
  }
});

export default Router;