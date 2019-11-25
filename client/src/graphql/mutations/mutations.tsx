import { gql } from "apollo-boost"

const CHATS_MUTATION = (nome: string, grupo: string, turma: string) => {
    return gql`
            mutation{
                createChat(nome: "${nome}", professores: [], grupo: "${grupo}", turma: "${turma}"){
                    _id,
                    nome,
                    professores,
                    alunos,
                    messages{
                    day,
                    content{
                        remetente,
                        horario,
                        text,
                        picture,
                        document
                    }
                    },
                    grupo,
                    turma
                }
            }

    `
}

const GROUP_MUTATION = (idUser: string, idGroup: string, userType: string) => {
    return gql`
        mutation{
            group(idUser: "${idUser}", idGroup: "${idGroup}", userType: "${userType}"){
            _id,
            nome,
            professores,
            alunos,
            messages{
                day,
                content{
                remetente,
                horario,
                text,
                picture,
                document
                }
            },
            grupo,
            turma
            }
        }

    `
}

export { CHATS_MUTATION, GROUP_MUTATION };