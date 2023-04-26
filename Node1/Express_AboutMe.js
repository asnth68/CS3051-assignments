const express = require('express');
const app = express();
const port = 5000;

const path = require('path')

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/fetch_AboutMe.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/interests', function (req, res) {
  res.sendFile(path.join(__dirname, 'interests.html'));
});

app.get('/websites', function (req, res) {
  res.sendFile(path.join(__dirname, 'sites.html'));
});

app.get('/courses', function (req, res) {
  res.sendFile(path.join(__dirname, 'courses.html'));
});

app.get(['/*.jpg', '/*.css', '/*.html', '/*.js'], function (req, res) {
  res.sendFile(path.join(__dirname, req.path));
});

let server = app.listen(port, function() {
  console.log("App server is running on port", port);
  console.log("to end press Ctrl + C");
});