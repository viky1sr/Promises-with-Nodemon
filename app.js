const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controller/homecontroler');
const uploadData = require('express-fileupload');


var app = express();

//express-fileupload
app.use(uploadData());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false  }));

// parse application/json
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.static('/images'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/dilo', routes);

var port = 1000;
app.listen(port , () => {
    console.log('Server is runing dengan port => ' + port)
});