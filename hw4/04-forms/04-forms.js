var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join((__dirname,'public'))));
app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.post('/submit', function (req, res) {
    var name = "Name :" +" " +req.body.name;
    var email = "</br>" + "Email :" + req.body.email ;
    var comments = "</br>" +"Comments :" + req.body.comments;
    var news =  req.body.check;
    if(news == "on"){
        var newsl = "</br>" + "Newsletter :" + "Yes , I would like to signup for the newsletter.";
    }
    else {
        newsl = "</br>" + "News letter :" + "No, thank you."
    }    
    
    console.log(req.body);
    res.send(name + "</br>" + email + "</br>" + comments + "</br>" + newsl);
    
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});