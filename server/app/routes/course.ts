/*---------------Importações---------------*/

import { Application } from 'express';

import CourseController from '../controllers/CourseController';
import cors from 'cors';

/*---------Declaração de Variáveis---------*/

const courseController = new CourseController();
const courseRoutes = CourseController.routes();

/*----------------Aplicação----------------*/

export default (app: Application) => { 
    app.route(courseRoutes.get)
        .post(courseController.courses, cors());

    app.route(courseRoutes.set)
        .post(courseController.createCourse(), cors());

    app.route(courseRoutes.put)
        .post(courseController.updateCourse(), cors());

    app.route(courseRoutes.delete)
        .post(courseController.removeCourse(), cors());

};
