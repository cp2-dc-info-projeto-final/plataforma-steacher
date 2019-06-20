module.exports = (app, express) =>{
    app.set('view engine', 'pug');
    app.set('views', 'C:\\Users\\Leo\\Desktop\\plataforma-steacher\\src\\app\\js\\views')
    app.use('/css', express.static('app/css'));
}