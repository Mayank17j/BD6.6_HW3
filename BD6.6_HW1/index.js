//SET UP VERCEL PATH AS "src": "BD6.6_HW1/server.js" "DESTINATION": "BD6.6_HW1/server.js"

const express = require('express');
const app = express();
app.use(express.json());

const { getAllMovies, getMoviesById } = require('./controllers');

//Exercise 1: Retrieve All Movies
app.get('/movies', async (req, res) => {
  const movies = getAllMovies();
  res.json({ movies });
});

//Exercise 2: Retrieve Movie by ID
app.get('/movies/details/:id', async (req, res) => {
  const movie = getMoviesById(parseInt(req.params.id));
  res.json({ movie });
});

module.exports = { app };
