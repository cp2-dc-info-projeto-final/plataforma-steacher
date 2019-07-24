import { Response, Request } from "express";

import views from '../../../../public/views/index';

export default class CommonController{

    public static routes(){
        return {
            home: '/',
            login: '/login',
            cadastro: '/cadastro'
        }
    }

    /*----------------Views----------------*/

    public get homeView(){
        return (req: Request, resp: Response) =>{
            resp.render(views.common.home);
        }
    }

    public get loginView(){
        return (req: Request, resp: Response) =>{
            resp.render(views.common.login)
        }
    }

    public get cadastroView(){
        return (req: Request, resp: Response) =>{
            resp.render(views.common.cadastro)
        }
    }

    /*----------------Métodos----------------*/

    public login(){
        return (req: Request, resp : Response) =>{
            resp.send('Login')
        }
    }

    public cadastro(){
        return (req: Request, resp : Response) =>{
            resp.send('Cadastro')
        }
    }

}