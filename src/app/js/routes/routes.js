const AlunoDao = require('../dao/AlunoDao');
const alunoDao = new AlunoDao();

module.exports = (app)=>{

    app.get('/', (req, resp) => {
        resp.render('home.pug');
    });

    app.post('/login', (req, resp) =>{
        console.log(req.body);
        alunoDao.getAluno(req.body)
            .then(aluno => resp.send(aluno.data()))
            .catch(error => console.log(error));
    })

    app.get('/cadastro', (req, resp) =>{
        resp.render('cadastro.pug');
    })

    app.post('/cadastro', (req, resp) =>{
        console.log(req.body);
        alunoDao.setAluno(req.body);
        resp.redirect('/');
    })

}

