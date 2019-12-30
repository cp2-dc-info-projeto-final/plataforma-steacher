import { model } from "mongoose"
import { subjectSchema } from "../../database/mongodb/schemas"

const Subject = model('subject', subjectSchema);

const createSubject = (name: string) => {
    return new Promise((resolve, reject) => {
        Subject.exists({ nome: name })
            .then(exists => {
                if (exists) reject({repetido: true})
                else{
                    Subject.create({ nome: name })
                    .then(result => resolve(result))
                    .catch(err => reject(err));
                }
            })
            .catch(err => reject(err));
    })
}

const findSubjects = () => {
    return new Promise((resolve, reject) => {
        Subject.find()
            .then(result => resolve(result))
            .catch(err => reject(err));
    })
}

const deleteSubject = (id: string) => {
    return new Promise((resolve, reject) => {
        Subject.deleteOne({ _id: id })
            .then(result => resolve(result))
            .catch(err => reject(err));
    })
}

export {
    createSubject,
    findSubjects,
    deleteSubject
}