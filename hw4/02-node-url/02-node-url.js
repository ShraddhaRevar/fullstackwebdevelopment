const { prototype } = require('events');
const http = require('http');

const port = process.env.PORT || 5000;

var url = require('url');

var address ='/attributes?hello=world&lorem=ipsum'
const p = url.parse(address, true);

var address1 ='/items?first=1&second=2&third=3&fourth=4'
var q = url.parse(address1, true);

var address2 ='/characters?spongebob=squarepants&patrick=star&sandy=cheeks'
var r = url.parse(address2, true);

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL

  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  }

  if (req.url === '/attributes?hello=world&lorem=ipsum'){
        console.log(p.query);
        let result='';
        for(i in p.query) {
            result += `<tr style =  "border: 1px solid black">
                               <td style =  "border: 1px solid black">${i}</td>
                               <td style =  "border: 1px solid black">${p.query[i]}</td>
                               </tr>`;
            }
        res.write('<table style =  "border: 1px solid black">'+result+'</table>');
        res.end();

  }
  if (req.url === '/items?first=1&second=2&third=3&fourth=4'){
        console.log(q.query);
        let result1 ='';
        for(i in q.query) {
            result1 = result1 + `<tr style =  "border: 1px solid black">
                                 <td style =  "border: 1px solid black">${i}</td>
                                 <td style =  "border: 1px solid black">${q.query[i]}</td>
                                 </tr>`;
            }
        res.write('<table style =  "border: 1px solid black">'+result1+'</table>');
        res.end();

}

  if (req.url === '/characters?spongebob=squarepants&patrick=star&sandy=cheeks'){
        console.log(r.query);
        let result2='';
        for(i in r.query) {
            result2 = result2 + `<tr style =  "border: 1px solid black">
                                 <td style =  "border: 1px solid black">${i}</td>
                                 <td style =  "border: 1px solid black">${r.query[i]}</td>
                                 </tr>`;
             }
        res.write('<table style =  "border: 1px solid black">'+result2+'</table>');
        res.end();

}

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});