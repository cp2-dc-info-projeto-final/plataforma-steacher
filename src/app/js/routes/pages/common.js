const path = require('path');

module.exports = (app)=>{
    var jsDir = path.join(__dirname, '..').replace(/\\/g, '/');


    //Login 
    app.get('/', (req, resp) => {
        resp.render('login.pug', {
            dir: jsDir
        });
    });

    app.post('/login', (req, resp) =>{
        console.log(req.body);
    })

    //Cadastro

    app.get('/cadastro', (req, resp) =>{
        resp.render('cadastro.pug');
    })

    app.post('/cadastro', (req, resp) =>{
        console.log(req.body);
        resp.redirect('/');
    })

}

