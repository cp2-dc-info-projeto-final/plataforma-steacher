/*---------------Importações---------------*/

import { Application } from 'express';

import cors from 'cors';
import UserController from '../controllers/UserController';

/*---------Declaração de Variáveis---------*/

const userController = new UserController();
const userRoutes = UserController.routes();

/*----------------Aplicação----------------*/

export default (app: Application) => { 
    app.route(userRoutes.get)
        .post(userController.user, cors());

    app.route(userRoutes.put)
        .post(userController.putUser(), cors());
};
