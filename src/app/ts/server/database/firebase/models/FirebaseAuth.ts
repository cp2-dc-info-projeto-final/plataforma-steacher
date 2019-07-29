import { auth } from '../firebase';
import { message, error, success, values } from '../../../config/colors';
import { User } from 'firebase';

export class FirebaseAuth {

    public signUp(email: string, password: string) {
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => console.log(success(('Usuário criado com sucesso.'))))
            .catch(error => console.log(error(error.message)));

    }

    public signIn(email: string, password: string) {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => console.log(success(('Login realizado.'))))
            .catch(error => console.log(error(error.message)));
        
    }

    public signOut() {
        auth().signOut()
            .then(() => console.log(success('Usuário desconectado com sucesso.')))
            .catch(error => console.log(error(error.message)))

    }


}