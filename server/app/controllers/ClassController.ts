import { Response, Request } from "express";
import { getClasses, setClass, deleteClass } from "../models/mongodb/Class";

export default class ClassController {

    public static routes() {
        return {
            get: '/getClasses',
            set: '/setClass',
            // put: '/putClass',
            delete: '/deleteClass'
        }
    }

    /*----------------Métodos----------------*/

    public get classes() {
        return (req: Request, resp: Response): void => {
            getClasses()
                .then(results => resp.status(200).send(results))
                .catch((err: any) => resp.status(400).send(err));
        }
    };

    public createClass() {
        return (req: Request, resp: Response): void => {
            const { name, course } = req.body;

            setClass(name, course)
                .then(result => resp.status(200).send(result))
                .catch((err: any) => resp.status(400).send(err));
        }
    };

    // public updateClass() {
    //     return (req: Request, resp: Response): void => {
    //         const { id, materia } = req.body;

    //         putClass(id, materia)
    //             .then(result => resp.status(200).send(result))
    //             .catch(err => resp.status(400).send(err));
    //     }
    // };

    public removeClass() {
        return (req: Request, resp: Response): void => {
            const { id } = req.body;

            deleteClass(id)
                .then(() => resp.status(200).send())
                .catch((err: any) => resp.status(400).send(err));
        }
    };

}