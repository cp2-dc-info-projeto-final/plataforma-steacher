class AlunoDao{
    
    constructor(){
        this._aluno;
        this._perfil;
        this._db = require('../config/firebase').firestore();
    }

    set aluno(aluno, turma){
        this.db.collection(`turmas/${turma.id}/alunos`).add({
            nome: aluno.nome,
            curso: aluno.curso,
            turma: turma.data().nome,
            turno: aluno.turno,
            nascimento: aluno.nascimento,
            perfil: {
                foto: aluno.perfil.foto,
                status: aluno.perfil.status
            }
        })
            .then(doc => this._aluno = doc)
            .catch(error => console.log(error));
        
    }

    get aluno(){
        return this._db.collection(`turmas/${this.aluno.data().turma}/alunos/${this._aluno.data().id}`).get()
    }

    set perfil(){
        this.db.collection(`turmas/${turma.id}/alunos/${this.aluno.data().id}/perfil`).add({
            foto: aluno.perfil.foto,
            status: aluno.perfil.status
            
        })
            .then(doc => this._perfil = doc)
            .catch(error => console.log(error));
    }

    get perfil(){
        return this.db.collection(`turmas/${turma.id}/alunos/${this.aluno.data().id}/perfil`);
    }

}

module.exports = AlunoDao;