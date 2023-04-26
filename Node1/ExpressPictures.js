const express = require('express');
const app = express();
const port = 5000;

const path = require('path')

const images = ['java.jpg', 'javascript.jpg', 'panda.jpg', 'python.jpg'];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/fetchPictures.html'));
});

app.get('/random-image', function (req, res) {
  // Choose a random JPG from the list
  let randomImage = images[Math.floor(Math.random() * images.length)];
  res.send(randomImage);
});

app.get(['/*.jpg', '/*.css', '/*.html', '/*.js'], function (req, res) {
  res.sendFile(path.join(__dirname, req.path));
});

let server = app.listen(port, function() {
  console.log("App server is running on port", port);
  console.log("to end press Ctrl + C");
});
