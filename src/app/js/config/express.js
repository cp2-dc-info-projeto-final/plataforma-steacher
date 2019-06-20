const express = require('express');
const config = require('../helpers/expressConfig');
const routes = require('../routes/routes');

const app = express();
    config(app, express);

routes(app);

module.exports = app;