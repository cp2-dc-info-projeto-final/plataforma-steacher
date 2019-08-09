import Pessoa from "./Pessoa ";
import { AlunoBd } from "./interfaces/barrel"

class Aluno extends Pessoa<AlunoBd>{

    constructor(aluno){
        super(aluno)
    }

}