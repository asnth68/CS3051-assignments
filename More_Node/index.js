const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const fs = require('fs');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/main.html'));
});

let wordlist = [];
fs.readFile(path.join(__dirname, 'frwords.txt'), 'utf8', function (err, data) {
    if (err) throw err;
    wordlist = data.split('\n');
});

let currentOffset = 0;
const pageSize = 20;

app.get('/previous', function(req, res) {
    if (currentOffset > 0) {
        currentOffset -= pageSize;
    }
    res.json(wordlist.slice(currentOffset, currentOffset + pageSize));
});

app.get('/next', function(req, res) {
    if (currentOffset + pageSize < wordlist.length) {
        currentOffset += pageSize;
    }
    res.json(wordlist.slice(currentOffset, currentOffset + pageSize));
});

let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});
