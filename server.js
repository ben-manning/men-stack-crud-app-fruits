const express = require('express');
const app = express();

// GET /
app.get('/', async (req, res) => {
  res.render('index.ejs');
});


app.listen(3000, () => {
  console.log('Listening on Port 3000');
});