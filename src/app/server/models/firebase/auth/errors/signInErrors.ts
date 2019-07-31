export default (errorCode: string) =>{
    
    let mensagem: string = '';

    switch(errorCode){

        case 'auth/app-deleted':{
            mensagem = 'Este usuáro foi removido do sistema.';
            break; 
        }
        
        default:{
            mensagem = 'Login e/ou senha inválidos.';
            break; 
        }
    
    }

    return mensagem;
}