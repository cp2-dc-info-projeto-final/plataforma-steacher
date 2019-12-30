import { UserData } from "../../models/firebase/interfaces/User";
import * as validator from 'validator';

const signUpValidator = (data: UserData) => {
    let validate = false;
    let error: string = '';

    
    if(!data.name) error = 'Informe o seu nome.';
    else if(!data.subName) error = 'Informe o seu sobrenome.';
    else if(!validator.isEmail(data.email)) error = 'E-mail inválido.';
    else if (data.email != data.emailConfirm) error = 'E-mail de confirmação inválido.';
    else if (!validator.isLength(data.password, { min: 6, max: undefined })) error = 'Senha deve conter no mínimo 6 caracteres.';
    else if (data.password !== data.passwordConfirm) error = 'Senha de confirmação inválida.';
    else if (!validator.isLength(data.registration, { min: 9, max: 9 })) error = 'Matrícula inválida.';
    else validate = true;

    return validate ? '' : error;
}

export { 
    signUpValidator
}

