//SET UP VERCEL PATH AS "src": "BD6.6_HW3/server.js" "DESTINATION": "BD6.6_HW3/server.js"

const express = require('express');
const app = express();
app.use(express.json());

const { getAllBooks, getBooksById } = require('./controllers');

//Exercise 1: Retrieve All Books
app.get('/books', async (req, res) => {
  const books = getAllBooks();
  res.json({ books });
});

//Exercise 2: Retrieve Book by ID
app.get('/books/details/:id', async (req, res) => {
  const book = getBooksById(parseInt(req.params.id));
  res.json({ book });
});

module.exports = { app };
