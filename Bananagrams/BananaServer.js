const express = require('express');
const app = express();
const port = 5000;

const path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Bananagram.html'));
});

let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});