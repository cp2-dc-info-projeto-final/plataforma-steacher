import { Response, Request } from "express";

import views from '../../../../public/views/index';

export default class CommonController{

    static routes(){
        return {
            home: '/',
            login: '/login',
            cadastro: '/cadastro'
        }
    }

    /*----------------Views----------------*/

    get homeView(){
        return (req: Request, resp: Response) =>{
            resp.render(views.common.home);
        }
    }

    get loginView(){
        return (req: Request, resp: Response) =>{
            resp.render(views.common.login)
        }
    }

    get cadastroView(){
        return (req: Request, resp: Response) =>{
            resp.render(views.common.cadastro)
        }
    }

    /*----------------Métodos----------------*/

    login(){
        return (req: Request, resp : Response) =>{
            resp.send('Login')
        }
    }

    cadastro(){
        return (req: Request, resp : Response) =>{
            resp.send('Cadastro')
        }
    }

}