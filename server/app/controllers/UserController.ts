import { Response, Request } from "express";
import { findUser, updateUser } from "../models/mongodb/User";

export default class UserController {

    public static routes() {
        return {
            get: '/getUser',
            put: '/putUser'
        }
    }

    /*----------------Métodos----------------*/

    public get user() {
        return (req: Request, resp: Response): void => {
            let body = req.body;
            findUser(body.id)
                .then(user => resp.status(200).send(user))
                .catch(err => resp.status(400).send());
        }
    };

    public putUser() {
        return (req: Request, resp: Response): void => {
            const { id, modification } = req.body;
            updateUser(id, modification)
                .then(user => resp.status(200).send(user))
                .catch(err => resp.status(400).send());
        }
    };

}