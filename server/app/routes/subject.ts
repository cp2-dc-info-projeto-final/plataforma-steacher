/*---------------Importações---------------*/

import { Application } from 'express';

import cors from 'cors';
import SubjectController from '../controllers/SubjectController';


/*---------Declaração de Variáveis---------*/

const subjectController = new SubjectController();
const subjectRoutes = SubjectController.routes();

/*----------------Aplicação----------------*/

export default (app: Application) => {
    app.route(subjectRoutes.get)
        .post(subjectController.subjects, cors());

    app.route(subjectRoutes.set)
        .post(subjectController.setSubjects(), cors());

    app.route(subjectRoutes.delete)
        .post(subjectController.deleteSubjects(), cors());
};