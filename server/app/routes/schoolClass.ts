/*---------------Importações---------------*/

import { Application } from 'express';

import cors from 'cors';
import ClassController from '../controllers/ClassController';


/*---------Declaração de Variáveis---------*/

const classController = new ClassController();
const classRoutes = ClassController.routes();

/*----------------Aplicação----------------*/

export default (app: Application) => {
    app.route(classRoutes.get)
        .post(classController.classes, cors());

    app.route(classRoutes.set)
        .post(classController.createClass(), cors());

    app.route(classRoutes.delete)
        .post(classController.removeClass(), cors());
};