import { model } from "mongoose";
import { classSchema } from "../../database/mongodb/schemas";

const Class = model('Class', classSchema);

const getClasses = () => {
    return new Promise((resolve, reject) => {
        Class.find()
            .then(results => resolve(results))
            .catch(err => reject(err))
    });
}

const setClass = (name: string, course: any) => {
    return new Promise((resolve, reject) => {
        Class.exists({ nome: name })
            .then(exists => {
                if (exists) reject({ repetido: true })
                else {
                    Class.create({ nome: name, course: course })
                        .then(result => resolve(result))
                        .catch(err => reject(err))
                }
            })
            .catch(err => reject(err));
    });
}

// const putClass = (id: string, materia: string) => {
//     return new Promise((resolve, reject) => {
//         Class.findOneAndUpdate({ _id: id }, { $push: { materias: materia } }, { new: true })
//             .then(result => resolve(result))
//             .catch(err => reject(err))
//     });
// }

const deleteClass = (id: string) => {
    return new Promise((resolve, reject) => {
        Class.deleteOne({ _id: id })
            .then(result => resolve(result))
            .catch(err => reject(err))
    });
}

export {
    getClasses,
    setClass,
    // putClass,
    deleteClass
}