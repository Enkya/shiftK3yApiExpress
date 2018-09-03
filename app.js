require('./server/config/config');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// const routes = require('./routes/index');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.status(200).send('Hello World!'));

module.exports = app;