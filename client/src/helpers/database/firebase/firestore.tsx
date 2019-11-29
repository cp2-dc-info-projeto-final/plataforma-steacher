import { firestore as bd } from "./config/connection";

//#region Chats

function createChat() {
    return bd().collection('chats').add({
        aluno: null,
        professor: null,
        mensagens: []
    });
};

function insertInChat(idUser: string, userType: string, idChat: string) {
    return new Promise((resolve, reject) => {
        bd().collection('chats').doc(idChat).get()
            .then((doc: any) => {
                if (doc.exists) {
                    doc.ref.update({
                        [userType]: idUser
                    });
                    resolve(doc.data());
                }
                else {
                    reject({ exists: false });
                }
            })
            .catch((err: any) => {
                console.log(err);
                reject(err);
            });
    })
}

function getChats(idUser: string, userType: string) {
    return bd().collection('chats').where(userType, '==', idUser);
}

function insertMessage(idChat: string, message: any) {
    bd().collection('chats').doc(idChat).get()
        .then((doc: any) => {
            const previousValue = doc.data().mensagens;
            bd().collection('chats').doc(idChat).update({
                mensagens: [...previousValue, message]
            })
        })
        .catch((err: any) => console.log(err));
}

//#endregion

//#region Turmas

function createTurma(idTurma: string, name: string) {
    return bd().collection('turmas').doc(idTurma).set({
        name: name,
        alunos: [],
        turma: []
    });
}

function createMateria(name: string, idTurma: string) {
    return bd().collection('turmas').doc(idTurma).collection('materias').doc().set({
        name: name,
        alunos: [],
        professores: [],
        mensagens: []
    });
};

function insertInTurma(idUser: string, userType: string, idTurma: string) {
    return new Promise((resolve, reject) => {
        const prop = (userType == 'aluno') ? 'alunos' : 'professores';

        bd().collection('turmas').doc(idTurma).get()
            .then((doc: any) => {
                if (doc.exists) {
                    const previousValue = doc.data()[prop];

                    bd().collection('turmas').doc(idTurma).update({
                        [prop]: [...previousValue, idUser]
                    });
                }
                else {
                    reject({ exists: false });
                }
            })
    })
}

// function insertInTurma(idUser: string, userType: string, idTurma: string) {
//     return new Promise((resolve, reject) => {
//         const prop = (userType == 'aluno') ? 'alunos' : 'professores';

//         bd().collection('turmas').doc(idTurma).get()
//             .then(doc => {
//                 if (doc.exists) {
//                     bd().collection('turmas').doc(idTurma).collection('materias').get()
//                         .then(col => col.docs.forEach(doc =>{
//                             const previousValue = doc.data()[prop];

//                             doc.ref.update({
//                                 [prop]: [...previousValue, idUser]
//                             });
//                         }))
//                         .catch(err => reject(err));
//                 }
//                 else {
//                     reject({ exists: false });
//                 }
//             })
//     })
// }

function getTurma(idUser: string, userType: string) {
    const user = (userType == 'aluno') ? 'alunos' : 'professores';

    return bd().collection('turmas').where(user, 'array-contains', idUser);
}

function insertMessageTurma(idTurma: string, idMateria: string, message: any) {
    bd().collection('turmas').doc(idTurma).collection('materias').doc(idMateria).get()
        .then((doc: any) => {
            const previousValue = doc.data().mensagens;
            bd().collection('turmas').doc(idTurma).collection('materias').doc(idMateria).update({
                mensagens: [...previousValue, message]
            })
        })
        .catch(err => console.log(err));
}

//#endregion

export {
    createChat,
    insertInChat,
    getChats,
    insertMessage,
    createTurma,
    createMateria,
    insertInTurma,
    getTurma,
    insertMessageTurma
}