const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/products', (req, res) => {
  res.render('products');
});
app.get('/pricing', (req, res) => {
  res.render('pricing');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/encdec', (req, res) => {
  res.render('encdec');
});
app.get('/format', (req, res) => {
  res.render('format');
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
