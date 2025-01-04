//SET UP VERCEL PATH AS "src": "BD6.6_HW2/server.js" "DESTINATION": "BD6.6_HW2/server.js"

const express = require('express');
const app = express();
app.use(express.json());

const { getAllGames, getGamesById } = require('./controllers');

//Exercise 1: Retrieve All Games
app.get('/games', async (req, res) => {
  const games = getAllGames();
  res.json({ games });
});

//Exercise 2: Retrieve Game by ID
app.get('/games/details/:id', async (req, res) => {
  const game = getGamesById(parseInt(req.params.id));
  res.json({ game });
});

module.exports = { app };
