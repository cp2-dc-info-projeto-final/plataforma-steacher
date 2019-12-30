import { Response, Request } from "express";
import { getCourses, setCourse, putCourse, deleteCourse } from "../models/mongodb/Courses";

export default class CourseController {

    public static routes() {
        return {
            get: '/getCourses',
            set: '/setCourse',
            put: '/putCourse',
            delete: '/deleteCourse'
        }
    }

    /*----------------Métodos----------------*/

    public get courses() {
        return (req: Request, resp: Response): void => {
            getCourses()
                .then(results => resp.status(200).send(results))
                .catch((err: any) => resp.status(400).send(err));
        }
    };

    public createCourse() {
        return (req: Request, resp: Response): void => {
            const { name, subjects } = req.body;

            setCourse(name, subjects)
                .then(result => resp.status(200).send(result))
                .catch((err: any) => resp.status(400).send(err));
        }
    };

    public updateCourse() {
        return (req: Request, resp: Response): void => {
            const { id, materia } = req.body;

            putCourse(id, materia)
                .then(result => resp.status(200).send(result))
                .catch(err => resp.status(400).send(err));
        }
    };

    public removeCourse() {
        return (req: Request, resp: Response): void => {
            const { id } = req.body;

            deleteCourse(id)
                .then(() => resp.status(200).send())
                .catch((err: any) => resp.status(400).send(err));
        }
    };

}