import { Response, Request } from "express";
import { findSubjects, createSubject, deleteSubject } from "../models/mongodb/Subject";

export default class SubjectController {

    public static routes() {
        return {
            get: '/getSubjects',
            set: '/setSubject',
            delete: '/deleteSubject'
        }
    }

    /*----------------Métodos----------------*/

    public get subjects() {
        return (req: Request, resp: Response): void => {
            findSubjects()
                .then(subjects => resp.status(200).send(subjects))
                .catch(err => resp.status(400).send());
        }
    };

    public setSubjects() {
        return (req: Request, resp: Response): void => {
            const { name } = req.body;

            createSubject(name)
                .then(subject => resp.status(200).send(subject))
                .catch(err => resp.status(400).send(err));
        }
    };

    public deleteSubjects() {
        return (req: Request, resp: Response): void => {
            const { id } = req.body;
            
            deleteSubject(id)
                .then(subjects => resp.status(200).send(subjects))
                .catch(err => resp.status(400).send());
        }
    };
}