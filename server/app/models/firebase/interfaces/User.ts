interface User {

}

interface UserData {
    name: string,
    subName: string,
    email: string,
    emailConfirm: string,
    password: string,
    passwordConfirm: string,
    registration: string,
    type: 'aluno' | 'professor' | 'admin',
    materias?: string[] 
}

export { User, UserData };