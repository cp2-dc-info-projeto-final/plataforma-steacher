interface Message {
    remetente: string,
    horario: string,
    text?: string,
    picture?: string,
    document?: string
  }
  
interface Day {
    day: string,
    content: Message[]
  }

export interface Chat{
    _id: string,
    nome: string,
    professores: string[],
    alunos: string[],
    messages: Day[],
    grupo?: boolean,
    turma?: string
}