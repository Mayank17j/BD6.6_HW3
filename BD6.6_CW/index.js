//SET UP VERCEL PATH AS "src": "BD6.6_CW/server.js" "DESTINATION": "BD6.6_CW/server.js"

const express = require('express');
const app = express();
app.use(express.json());

const { getAllEmployees, getEmployeesById } = require('./controllers');

//Exercise 1: Retrieve All Employees
app.get('/employees', async (req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});

//Exercise 2: Retrieve Employee by ID
app.get('/employees/details/:id', async (req, res) => {
  const employee = getEmployeesById(parseInt(req.params.id));
  res.json({ employee });
});

module.exports = { app };
