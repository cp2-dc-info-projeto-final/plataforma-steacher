/*---------------Importações---------------*/

import firebase from 'firebase';
const config = require('../../config/json/firebase.json'); 

/*----------------Aplicação----------------*/

firebase.initializeApp(config);

/*-----------------Funções-----------------*/

function auth(){
    return firebase.auth();
}

function storage(){
    return firebase.storage()
}

/*----------------Exportação---------------*/

export default firebase;

export { auth, storage };

