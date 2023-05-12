const express = require('express');
const app = express();
const port = 5001;

const path = require('path');

// const sqlite3 = require('sqlite3').verbose();  // verbose() gives you better error codes. Remove when done debugging
// // Open a new database connection to the database file

const db = require('./db');

app.get('/letters', (req, res) => {
  db.all(`
    SELECT * FROM letters
  `, (err, rows) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Bananagram_Alden.html'));
});

let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});