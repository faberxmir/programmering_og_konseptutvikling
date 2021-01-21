const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const fileReader = require('fs');

app.listen(3000, () => {
  console.log("Express server has started!");
});

app.get('/', (req, res)=>{
  res.render("index");
});

app.get('/about', (req, res) => {
  res.render("about");
});
