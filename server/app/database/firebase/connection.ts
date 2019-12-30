/*---------------Importações---------------*/

import firebase from 'firebase';
const config = require('../../config/json/firebase.json'); 

/*----------------Aplicação----------------*/

firebase.initializeApp(config);

/*-----------------Funções-----------------*/

function auth(){
    return firebase.auth();
}

/*----------------Exportação---------------*/

export default firebase;

export { auth };

