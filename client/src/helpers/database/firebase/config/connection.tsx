/*---------------Importações---------------*/

import firebase from 'firebase';
const config = require('./firebase.json'); 

/*----------------Aplicação----------------*/

firebase.initializeApp(config);

/*-----------------Funções-----------------*/

function storage(){
    return firebase.storage();
}

function firestore(){
    return firebase.firestore();
}

/*----------------Exportação---------------*/

export default firebase;

export { storage, firestore };

