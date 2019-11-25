import { gql } from "apollo-boost"

const CHATS_QUERY = (id: string, userType: string) => {
    return gql`
        query{
            chats(id: "${id}", userType: "${userType}"){
                _id,
                nome,
                professores,
                alunos,
                grupo,
                turma,
                messages{
                    day,
                    content{
                        remetente,
                        horario,
                        text,
                        picture,
                        document
                    }
                }
            }
        }
    `
}

export { CHATS_QUERY };