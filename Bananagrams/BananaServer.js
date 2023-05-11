const express = require('express');
const app = express();
const port = 5000;

const path = require('path');
const fs = require('fs');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Bananagram.html'));
});

app.get('/Peel', function(req, res) {

});

app.get('/Dump', function(req, res) {
    if (currentOffset + pageSize < wordlist.length) {
        currentOffset += pageSize;
    }
    res.json(wordlist.slice(currentOffset, currentOffset + pageSize));
});

app.get('/Undo', function(req, res) {

});

let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});