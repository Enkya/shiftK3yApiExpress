const config = require('./server/config/config');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
let multer = require('multer');
let session = require('cookie-session');


const app = express();

const routes = require('./server/routes/');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(multer({inMemory: true}));
app.use(session({signed: true, secret:config.cookieSecret}));

app.use ('/', routes);

module.exports = app;