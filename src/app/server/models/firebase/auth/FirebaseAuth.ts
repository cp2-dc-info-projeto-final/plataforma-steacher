//Módulos

import { auth } from '../../../database/firebase/connection';
import { error, success } from '../../../config/colors';
import { signInErrors, signUpErrors } from './errors/barrel';

//Interfaces

import { FirebaseError } from '../../../models/firebase/interfaces/barrel';

export class FirebaseAuth {

    public signUp(email: string, password: string): Promise<FirebaseError> {
        return new Promise((resolve, reject) => {
            auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log(success(('Usuário criado com sucesso.')));
                    resolve(this._resultFactory('Usuário criado com sucesso.'));
                })
                .catch(err => {
                    console.log(error(err.code));
                    reject(this._resultFactory(signUpErrors(err.code), true));
                })
        })
    }

    public signIn(email: string, password: string): Promise<FirebaseError> {
        return new Promise((resolve, reject) =>{
            auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log(success(('Login realizado com sucesso.')));
                resolve(this._resultFactory('Login realizado com sucesso.'));
            })
            .catch(err => {
                console.log(error(err.code));
                reject(this._resultFactory(signInErrors(err.code), true));
            });
        })
        
    }

    public signOut(): Promise<FirebaseError> {
        return new Promise((resolve, reject) =>{
            auth().signOut()
            .then(() => {
                console.log(success('Usuário desconectado com sucesso.'));
                resolve(this._resultFactory('Desconectado da conta com sucesso.'));
            })
            .catch(err => {
                console.log(error(err.code));
                reject(this._resultFactory('Não foi possível se desconectar da conta.', true));
            })

        }) 
        
    }

    /*----------------Helpers----------------*/

    private _resultFactory(message: string, error?: boolean): FirebaseError {
        let result: FirebaseError = {
            error: false,
            message: ''
        };

        result.error = error ? true : false;

        result.message = message;

        return result;
    }

}