//Módulos

import { auth } from '../../../database/firebase/connection';
import { error, success } from '../../../config/colors';
import { signInErrors, signUpErrors } from './errors/barrel';

//Interfaces

import { FirebaseError } from '../../../models/firebase/interfaces/barrel';
import { err } from '../../../global/error';

export class FirebaseAuth {

    public signUp(email: string, password: string): Promise<FirebaseError> {
        return new Promise((resolve, reject) => {
            auth().createUserWithEmailAndPassword(email, password)
                .then((result: any) => {
                    console.log(success(('Usuário criado com sucesso.')));
                    resolve(this._resultFactory('Usuário criado com sucesso.', result.user));
                })
                .catch(err => {
                    console.log(error(err.code));
                    reject(this._resultFactory(signUpErrors(err.code), '', true));
                })
        })
    }

    public signIn(email: string, password: string): Promise<FirebaseError> {
        return new Promise((resolve, reject) => {
            auth().signInWithEmailAndPassword(email, password)
                .then(result => {
                    console.log(success(('Login realizado com sucesso.')));
                    resolve(this._resultFactory('Login realizado com sucesso.', result.user));
                })
                .catch(err => {
                    console.log(error(err.code));
                    reject(this._resultFactory(signInErrors(err.code), '', true));
                });
        })

    }

    public signOut(): Promise<FirebaseError> {
        return new Promise((resolve, reject) => {
            auth().signOut()
                .then(() => {
                    console.log(success('Usuário desconectado com sucesso.'));
                    resolve(this._resultFactory('Desconectado da conta com sucesso.'));
                })
                .catch(err => {
                    console.log(error(err.code));
                    reject(this._resultFactory('Não foi possível se desconectar da conta.', '', true));
                })

        })

    }

    public passwordRecover(email: string): void {
        auth().sendPasswordResetEmail(email)
            .then(() => {
                console.log(success('E-mail de recuperação de senha enviado com sucesso.'));
            })
            .catch(error => {
                console.log(err('[FIREBASE] Erro de recuperação de senha', error));
            });
    }

    public isLogged() {
        return new Promise((resolve, reject) => {
            auth().onAuthStateChanged(user => {
                if (user) {
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        })
    }

    /*----------------Helpers----------------*/

    private _resultFactory(message: string, user?: any, error?: boolean): FirebaseError {
        let result: FirebaseError

        if (user) {
            result = {
                error: false,
                message: '',
                user: user
            };
        }
        else {
            result = {
                error: false,
                message: ''
            };
        }

        result.error = error ? true : false;

        result.message = message;

        return result;
    }

}