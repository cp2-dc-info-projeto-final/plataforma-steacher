interface UsuarioBd{
    id: string,
    nome: string,
    sobrenome: string,
    matricula: string,
    chats?: string[],
    grupos?: string[],
    materia?: string[],
    turmaAtual?: string,
    turmas?: any[],
    foto?: string,
    turno?: string,
    contato: string,
    userType: 'aluno' | 'professor' | 'admin'
}

export default UsuarioBd;