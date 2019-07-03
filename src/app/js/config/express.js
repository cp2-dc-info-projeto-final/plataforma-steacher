const express = require('express');
const config = require('../helpers/expressConfig');
const commonRoutes = require('../routes/pages/common');
const controllersRoutes = require('../routes/controllers/controllers');

const app = express();
    config(app, express);

commonRoutes(app);
controllersRoutes(app);

module.exports = app;