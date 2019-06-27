const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app, express) =>{
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, '../views'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/css', express.static('app/css'));
    app.use('/js', express.static('app/js'));
    app.use('/npm', express.static('/node_modules/'))
}