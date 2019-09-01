/*---------------Importações---------------*/

import { Application } from 'express';

import CommonController from '../../controllers/CommonController'

/*---------Declaração de Variáveis---------*/

const commonController = new CommonController();
const commonRoutes = CommonController.routes();

/*----------------Aplicação----------------*/

export default (app: Application) => {
    app.route(commonRoutes.home)
        .get(commonController.homeView)

    app.route(commonRoutes.login)
        .get(commonController.loginView)
        .post(commonController.login())

    app.route(commonRoutes.cadastro)
        .get(commonController.cadastroView)
        .post(commonController.cadastro())
};


