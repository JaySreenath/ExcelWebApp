const express = require('express');
const bodyParser = require('body-parser');

const myErrorLogger = require('./utilities/ErrorLogger');
const myRequestLogger = require('./utilities/RequestLogger');
const Router = require('./routes/Router');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}));
app.use(myRequestLogger);
app.use('/surgery', Router);
app.use(myErrorLogger);

app.listen(4000);
console.log("Server listening in port 4000 ");

module.exports = app;