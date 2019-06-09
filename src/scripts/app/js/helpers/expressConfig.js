module.exports = (app, express) =>{
    app.set('view engine', 'pug');
    app.set('views', 'C:\\Users\\Leo\\Desktop\\plataforma-steacher\\src\\scripts\\app\\js\\views')
    app.use('/style', express.static('app/js/views/styles'));
}