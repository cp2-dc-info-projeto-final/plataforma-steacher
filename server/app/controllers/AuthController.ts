import { Response, Request } from "express";
import { FirebaseAuth } from "../models/firebase/auth/FirebaseAuth";
import { err } from "../global/error";
import { UserData } from "../models/firebase/interfaces/User";
import { signUpValidator } from "../database/firebase/validators";
import { createUser, findUser, findTeachers } from "../models/mongodb/User";
import { signInErrors } from "../models/firebase/auth/errors/barrel";
import UsuarioBd from '../models/mongodb/interfaces/Usuario';

const firebaseAuth = new FirebaseAuth();

export default class AuthController {

    public static routes() {
        return {
            signUp: '/signUp',
            signIn: '/signIn',
            signOut: '/signOut',
            isLogged: '/isLogged',
            passwordRecover: '/passwordRecover',
            getTeachers: '/getTeachers'
        }
    }

    /*----------------Métodos----------------*/

    public signUp() {
        return (req: Request, resp: Response): void => {
            let body: UserData = req.body.data;

            const error = signUpValidator(body);

            if (!error) {
                firebaseAuth.signUp(body.email, body.password)
                    .then(result => {

                        const user: UsuarioBd = {
                            id: <string>result.user.uid,
                            nome: body.name,
                            sobrenome: body.subName,
                            matricula: body.registration,
                            contato: result.user.email,
                            userType: body.type
                        }

                        if(body.materias) user.materia = body.materias;

                        createUser(user)
                            .then(newUser => resp.status(201).send(newUser))
                            .catch(errorMongo => resp.status(500).send(errorMongo));

                    })
                    .catch(errorFire => {
                        resp.status(400).send(errorFire.message);
                    });
            }
            else {
                err('[FIREBASE] Erro de cadastro:', error);
                // signInErrors(error);
                resp.status(400).send(error);
            }
        }
    }

    public signIn() {
        return (req: Request, resp: Response): void => {
            let body = req.body;

            firebaseAuth.signIn(body.email, body.password)
                .then(result => {

                    findUser(<string>result.user.uid)
                        .then(user => resp.status(200).send(user))
                        .catch(error => resp.status(503).send(error));
                })
                .catch(error => resp.status(400).send(error.message));
        }
    }

    public signOut() {
        return (req: Request, resp: Response): void => {
            firebaseAuth.signOut()
                .then(result => resp.status(200).send(result))
                .catch(error => resp.status(400).send(error));
        }
    }

    public isLogged() {
        return (req: Request, resp: Response): void => {
            firebaseAuth.isLogged()
                .then(result => resp.status(200).send(result))
                .catch(error => resp.status(400).send(error));
        }
    }

    public passwordRecover() {
        return (req: Request, resp: Response): void => {
            let body = req.body;

            if (body.email) {
                firebaseAuth.passwordRecover(body.email)

                resp.status(200).send('E-mail enviado com sucesso.');
            }
            else resp.status(400).send('E-mail inválido.');
        }
    }

    public getTeachers(){
        return (req: Request, resp: Response): void =>{
            findTeachers()
                .then(results => resp.status(200).send(results))
                .catch(err => resp.status(500).send(err))
        }
    }
}