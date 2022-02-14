const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const routes = [
    'welcome',
    'redirect',
    'redirected',
    'cache',
    'cookie',
    'check-cookies',
    'other',
  ];

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 01</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    res.end();
  }
  else if(req.url ==='/welcome') { 
    res.write(' Welcome!'); 
    res.statusCode=200; 
    res.end();  
  } 

  else if(req.url ==='/redirect') { 
    res.writeHead(302, { "Location": "http://localhost:" + port  + '/redirected' });
    res.end();
  } 

  else if(req.url ==='/redirected') { 
    res.write('Hello there! This is redirected page');
    res.end();
  }

  else if(req.url ==='/cache') { 
    res.setHeader('Cache-Control',`max-age=86400, no-cache`)
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write('This resource was cached');  
    res.end();  
 }

 else if(req.url === '/cookie') {
    res.writeHead( 200, {
    'Set-Cookie': 'hello=world',
    'Content-Type': 'text/plain'
        });
    res.write('cookies... yummm');
    res.end(); 
 } 

 else if(req.url === '/check-cookies'){
  let c = res.writeHead( 200, {'Set-Cookie': 'hello=world','Content-Type': 'text/plain'});
  if (cookie.split(';').some(function(item) {
    return item.trim().indexOf('hello=') == 0
}))

if (c.split(';').some((item) => item.trim().startsWith('hello='))) {
    res.write('yes');
}
else { res.write('no');
}
    res.end();
}

else if (req.url === '/other') {
  res.write('404-Page not found');
  res.statusCode=404;
  res.end();

}
  } );

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});