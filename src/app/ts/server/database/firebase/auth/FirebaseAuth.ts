//Módulos

import { auth } from '../firebase';
import { error, success } from '../../../config/colors';
import { signInErrors, signUpErrors } from './errors/barrel';

//Interfaces

import { ErrorMessage } from '../../../models/interfaces/barrel';

export class FirebaseAuth {

    public signUp(email: string, password: string): Promise<ErrorMessage> {
        return new Promise((resolve, reject) => {
            auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log(success(('Usuário criado com sucesso.')));
                    resolve(this._result('Usuário criado com sucesso.'));
                })
                .catch(err => {
                    console.log(error(err.code));
                    reject(this._result(signUpErrors(err.code), true));
                })
        })
    }

    public signIn(email: string, password: string): Promise<ErrorMessage> {
        return new Promise((resolve, reject) =>{
            auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log(success(('Login realizado com sucesso.')));
                resolve(this._result('Login realizado com sucesso.'));
            })
            .catch(err => {
                console.log(error(err.code));
                reject(this._result(signInErrors(err.code), true));
            });
        })
        
    }

    public signOut(): Promise<ErrorMessage> {
        return new Promise((resolve, reject) =>{
            auth().signOut()
            .then(() => {
                console.log(success('Usuário desconectado com sucesso.'));
                resolve(this._result('Desconectado da conta com sucesso.'));
            })
            .catch(err => {
                console.log(error(err.code));
                reject(this._result('Não foi possível se desconectar da conta.', true));
            })

        }) 
        
    }

    /*----------------Helpers----------------*/

    private _result(message: string, error?: boolean): ErrorMessage {
        let result = {
            error: false,
            message: ''
        };

        result.error = error ? true : false;

        result.message = message;

        return result;
    }

}