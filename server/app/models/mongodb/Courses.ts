import { model } from "mongoose";
import { courseSchema } from "../../database/mongodb/schemas";
import subject from "../../routes/subject";

const Course = model('course', courseSchema);

const getCourses = () => {
    return new Promise((resolve, reject) => {
        Course.find()
            .then(results => resolve(results))
            .catch(err => reject(err))
    });
}

const setCourse = (name: string, subjects: string[]) => {
    return new Promise((resolve, reject) => {
        Course.exists({ nome: name })
            .then(exists => {
                if (exists) reject({ repetido: true })
                else {
                    Course.create({ nome: name, materias: subjects })
                        .then(result => resolve(result))
                        .catch(err => reject(err))
                }
            })
            .catch(err => reject(err));
    });
}

const putCourse = (id: string, materia: string) => {
    return new Promise((resolve, reject) => {
        Course.findOneAndUpdate({ _id: id }, { $push: { materias: materia } }, { new: true })
            .then(result => resolve(result))
            .catch(err => reject(err))
    });
}

const deleteCourse = (id: string) => {
    return new Promise((resolve, reject) => {
        Course.deleteOne({ _id: id })
            .then(result => resolve(result))
            .catch(err => reject(err))
    });
}

export {
    getCourses,
    setCourse,
    putCourse,
    deleteCourse
}