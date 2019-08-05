abstract class Pessoa<T>{
    
    constructor(protected _pessoa: T){}

    public get id(){
        return this._pessoa['id'];
    }

    public get nome(){
        return this._pessoa['nome'];
    }

    public get matricula(){
        return this._pessoa['matricula'];
    }

    public get turma(){
        return this._pessoa['turma'];
    }

}

export default Pessoa;