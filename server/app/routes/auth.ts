/*---------------Importações---------------*/

import { Application } from 'express';

import AuthController from '../controllers/AuthController';
import cors from 'cors';

/*---------Declaração de Variáveis---------*/

const authController = new AuthController();
const authRoutes = AuthController.routes();

/*----------------Aplicação----------------*/

export default (app: Application) => { 
    app.route(authRoutes.signUp)
        .post(authController.signUp(), cors());

    app.route(authRoutes.signIn)
        .post(authController.signIn(), cors());

    app.route(authRoutes.signOut)
        .post(authController.signOut(), cors());

    app.route(authRoutes.passwordRecover)
        .post(authController.passwordRecover(), cors());

    app.route(authRoutes.isLogged)
        .post(authController.isLogged(), cors());

    app.route(authRoutes.getTeachers)
        .get(authController.getTeachers, cors());
};
