class TurmaDao{
    
    constructor(){
        this._turma;
        this._db = require('../config/firebase').firestore();
    }

    set turma(turma){
        this.db.collection('turmas').add({
            nome: turma.nome,
            serie: turma.serie,
            tipo: turma.tipo,
            turno: turma.turno
        })
            .then(doc => this._turma = doc)
            .catch(error => console.log(error));
        
    }

    get turma(){
        return this._db.collection(`turmas/${this.turma.data().id}`).get()
    }

}

module.exports = TurmaDao;