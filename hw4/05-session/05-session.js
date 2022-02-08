const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;


app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}));

app.get('**', (req, res) => {
    
    var sessionURLS = req.session.urlList;
    var response;
    if(!sessionURLS) {
        req.session.urlList = [req.originalUrl];
        response = "Welcome to "+req.protocol + " " + "://" + req.get('host') + req.originalUrl + "<br/>";
        response  += "Currently on route :" +" " +  req.originalUrl;
    }
    else {
        response  = "Currently on route :" +  req.originalUrl + "</br>" + "</br>Previously Visited :" + " ";
        req.session.urlList.push(req.originalUrl);
    }

    for(route in sessionURLS) {
        response += "<br/>" + sessionURLS[route];
    }

    res.send(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
