export default (errorCode: string) =>{
    
    let message: string = '';

    switch(errorCode){

        case 'auth/invalid-email':{
            message = 'Login inválido.';
            break; 
        }
        
        case 'auth/weak-password':{
            message = 'Senha deve conter no mínimo 6 caracteres.';
            break; 
        }

        case 'auth/email-already-in-use':{
            message = 'Este endereço de e-mail já está em uso.';
            break; 
        }
    
    }

    return message;
}