import { Schema } from 'mongoose';

const userSchema = new Schema({
    _id: String,
    nome: String,
    sobrenome: String,
    matricula: String,
    chats: Array,
    grupos: Array,
    materia: [String],
    turmaAtual: String,
    turmas: Array,
    foto: String,
    turno: String,
    contato: String,
    userType: String
},{versionKey: false});

const subjectSchema = new Schema({
    nome: String
},{versionKey: false});

const courseSchema = new Schema({
    nome: String,
    materias: [String]
},{versionKey: false});

const classSchema = new Schema({
    nome: String,
    course:{
        nome: String,
        materias: [String]
    }
},{versionKey: false});

export {
    subjectSchema,
    courseSchema,
    classSchema,
    userSchema
}