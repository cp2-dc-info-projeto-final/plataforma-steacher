const path = require('path');

module.exports = (app, express) =>{
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, '../views'));
    app.use('/css', express.static('app/css'));
}