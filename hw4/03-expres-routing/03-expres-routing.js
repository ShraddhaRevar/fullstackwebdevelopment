const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

const port = process.env.PORT || 5000;

const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'other',
];

let getRoutes = () => {
  let result = '';

  routes.forEach(
    (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
  );

  return result;
};

app.get('/', (req, res) => {
  let routeResults = getRoutes();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Exercise 04</h1>`);
  res.write(`<ul> ${routeResults} </ul>`);
  res.end();
});

app.get('/welcome', (req, res) => {
  res.send('Welcome!');
  res.sendStatus(200);
});


app.get('/redirect', (req, res) => {
  res.redirect('/redirected');
});

app.get('/redirected', (req, res) => {
  res.send('This is where you are taken from redirect page:)');
});

app.get('/cache', (req, res) => {
  res.send('This resource was cached');
  res.set('Cache-control', 'public, max-age=86400');
});

app.get('/cookie', (req, res) => {
  res.cookie('Hello=world');
  res.send('Cookies...yumm');
  res.send('cookie is added');
});

app.get('/other', (req, res) => {
  res.status(404).send("404-page not found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
