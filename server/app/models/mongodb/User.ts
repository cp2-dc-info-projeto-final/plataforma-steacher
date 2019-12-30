import { model, Document } from 'mongoose';
import { userSchema } from '../../database/mongodb/schemas';
import UsuarioBd from './interfaces/Usuario';
import { err } from '../../global/error';

const User = model('user', userSchema);

const createUser = (user: UsuarioBd) => {
    return new Promise<Document | null | string>((resolve, reject) => {
        const newUser = new User({
            _id: user.id,
            nome: user.nome,
            sobrenome: user.sobrenome,
            matricula: user.matricula,
            chats: [],
            turmas: [],
            turmaAtual: '',
            materia: user.materia,
            foto: '',
            turno: '',
            contato: user.contato,
            userType: user.userType
        });

        newUser.save((error: any, user: Document) => {
            if (error) {
                err('[MONGODB] Erro de Cadastro:', error);
                reject(error);
            }
            else resolve(user);
        });
    })
}

const findUser = (id: string) => {
    return new Promise<Document | null | string>((resolve, reject) => {
        User.findById(id, (error, user) => {
            if (error) {
                err('[MONGODB] Erro de Login:', 'Usuário não encontrado.');
                reject('Usuário não encontrado');
            }
            else if (user) {
                resolve(user)
            }
            else resolve(user);
        })

    })
}

const findTeachers = () => {
    return new Promise<Document[] | null | string>((resolve, reject) => {
        User.find({ userType: 'professor' }, (error, user) => {
            if (error) {
                reject(error);
            }
            else if (user) {
                resolve(user)
            }
            else resolve(user);
        })

    })
}

const updateUser = (id: string, modification: any) => {
    return new Promise<Document[] | null | string>((resolve, reject) => {
        User.findOneAndUpdate({ _id: id }, modification, {new: true} , (error: any, user: any) => {
            if (error) {
                err('[MONGODB] Erro de Login:', 'Usuário não encontrado.');
                reject('Usuário não encontrado');
            }
            else if (user) {
                resolve(user)
            }
            else resolve(user);
        })

    })
}

export { createUser, findUser, findTeachers, updateUser };