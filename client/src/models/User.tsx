interface User {
    id: string,
    nome: string,
    sobrenome: string,
    matricula: string,
    chats?: string[],
    materia?: string,
    turmaAtual?: string,
    turmas?: string[],
    foto?: string,
    turno?: string,
    contato: string,
    userType: 'aluno' | 'professor'
}

export default User;