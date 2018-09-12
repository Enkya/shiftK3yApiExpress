require('dotenv').config()

const config = require('./server/config/config');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
let multer = require('multer');
let session = require('cookie-session');
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const uuid = require('uuid');


const app = express();

const routes = require('./server/routes/');

const callback = (iss, sub, profile, accessToken, refreshToken, done) => {
    done(null, {
      profile,
      accessToken,
      refreshToken
    });
  };

  passport.use(new OIDCStrategy(config.creds, callback));
  
  const users = {};
  passport.serializeUser((user, done) => {
    const id = uuid.v5();
    users[id] = user;
    done(null, id);
  });
  passport.deserializeUser((id, done) => {
    const user = users[id];
    done(null, user);
  });

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(multer({inMemory: true, dest:'./uploads/'}).any());
app.use(session({signed: true, secret:config.cookieSecret}));

app.use ('/', routes);

module.exports = app;