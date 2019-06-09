const express = require('express');
const config = require('../helpers/expressConfig');

const app = express();
    config(app, express);

module.exports = app;