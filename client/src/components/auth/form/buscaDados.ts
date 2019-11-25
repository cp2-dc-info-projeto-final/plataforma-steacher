import { chatsQuery } from '../../../graphql/queries/Query';

const buscaDados = (id: string, userType: string) => {
    return new Promise((resolve, reject) =>{
        chatsQuery(id, userType)
            .then(result =>{
                console.log(result.data);
                resolve();
            })
            .catch(err => console.log(err));
    })
}

export { buscaDados };