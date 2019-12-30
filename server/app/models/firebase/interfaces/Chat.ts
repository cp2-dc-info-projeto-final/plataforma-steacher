export interface Mensagem{
    texto: string,
    imagem: string,
    documento: string,
    remetente: string
}

export interface Chat {
    aluno: string,
    professor: string,
    mensagens: Mensagem[]
}

export interface Group{
    alunos: string[],
    professores: string[],
    admin: string,
    mensagens: Mensagem[]
}

export interface Turma{
    alunos: string[],
    professor: string,
    mensagens: Mensagem[]
}
