const express = require('express');
const path = require('path');

const router = require('./contollers/index');

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(
  express.static(path.join(__dirname, '..', '..', 'public'), { maxAge: '30d' }),
);
app.use(router);

module.exports = app;
