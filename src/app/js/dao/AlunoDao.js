class AlunoDao{
    
    constructor(){
        this._db = require('../config/firebase').firestore();
    }

    setAluno(aluno){
        this._db.collection(`turmas/${aluno.turma}/alunos`).add({
            nome: aluno.nome,
            sobrenome: aluno.sobrenome,
            matricula: aluno.matricula,
            turma: aluno.turma
        })
            .then(doc =>{
                this._db.collection(`usuarios`).add({
                    id: doc.id,
                    turma: aluno.turma, //Futuramente guardar o id da Turma.
                    email: aluno.email,
                    senha: aluno.senha
                })
                    .then(console.log('Usuario criado com sucesso!'))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        
    }

    getAluno(dados){
        return new Promise((resolve, reject) =>{
            this._db.collection(`usuarios`)
                .where('email', '==', dados.email)
                .where('senha', '==', dados.senha)
                .get()
                    .then(usuarioQuery => usuarioQuery.forEach(usuario =>{
                        this._db.collection(`turmas/${usuario.data().turma}/alunos`).doc(usuario.data().id).get()
                            .then(dados => resolve(dados))
                            .catch(error => console.log(error));
                    }))
                    .catch(error => reject(error));
        })
        
    }

}

module.exports = AlunoDao;