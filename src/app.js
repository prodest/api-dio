const config = require('./config/app');
if (config.env === 'production') {
  require('newrelic');
}
const apiMiddleware = require('node-mw-api-prodest').middleware;
const express = require('express');

let app = express();

app.use(
  apiMiddleware({
    compress: true,
    cors: true,
    log: true
    // authentication: {
    //     jwtPublicKey: config.jwtPublicKey
    // }
  })
);

// load our routes
require('./routes/latest')(app);
require('./routes/search')(app);

app.use(
  apiMiddleware({
    error: {
      notFound: true,
      debug: config.env === 'development'
    }
  })
);

let pathApp = express();

const path = config.path;
pathApp.use(path, app);

module.exports = pathApp;
