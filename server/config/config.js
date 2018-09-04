let ENV = require('./' + (process.env.NODE_ENV || 'development') + '.json');

const gcpConfig = require('./extraConfig.js');

ENV = {...ENV, ...gcpConfig};

module.exports = ENV;
