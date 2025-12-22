const axios = require('axios');
const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;

const public_users = express.Router();

/**
 * Register a new user
 * (already handled in auth_users.js, left unchanged)
 */
public_users.post("/register", (req, res) => {
  return res.status(300).json({ message: "Yet to be implemented" });
});

/**
 * Get the book list available in the shop
 * Using async/await with axios
 */
public_users.get('/', async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Get book details based on ISBN
 * Using async/await with axios
 */
public_users.get('/isbn/:isbn', async (req, res) => {
  try {
    const isbn = req.params.isbn;
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Get book details based on author
 * Using async/await with axios
 */
public_users.get('/author/:author', async (req, res) => {
  try {
    const author = req.params.author;
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Get all books based on title
 * Using async/await with axios
 */
public_users.get('/title/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Get book review
 * (not required for Q11, left unchanged)
 */
public_users.get('/review/:isbn', function (req, res) {
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
