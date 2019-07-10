const path = require('path');
const firebase = require('./../../config/firebase');

module.exports = (app) => {
    var jsDir = path.join(__dirname, '..').replace(/\\/g, '/');


    //Login 
    app.get('/', (req, resp) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user.displayName);
                console.log(user.email);
                console.log(user.emailVerified);
                console.log(user.photoURL);
                console.log(user.isAnonymous);
                console.log(user.uid);
                console.log(user.providerData);
                resp.render('home.pug');
            } else resp.render('login.pug', { dir: jsDir });
            resp.status(200).send();
        });
    });

    app.post('/login', (req, resp) => {
        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.senha)
            .then(user => {
                console.log('Usuário logado!!');
                resp.status(200).send({ email: user.user.email, uid: user.user.uid });
            })
            .catch(error => {
                var errorCode = error.code;
                resp.status(400).send(error.message);
            });
    })

    //Cadastro

    app.get('/cadastro', (req, resp) => {
        resp.render('cadastro.pug');
        resp.status(200).send();
    })

    app.post('/cadastro', (req, resp) => {
        firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.senha)
            .then(user => {
                console.log('Usuário cadastrado!!');
                resp.status(304).redirect('/');
            })
            .catch(error => {
                var errorCode = error.code;
                resp.status(400).send(error.message);
            });

    })

    //Desconectar

    app.get('/sign-out', (req, resp) => {
        firebase.auth().signOut()
            .then(() => {
                resp.redirect('/');
                resp.status(200).send();
            })
            .catch(error => resp.status(500).send(error));
    })

}

