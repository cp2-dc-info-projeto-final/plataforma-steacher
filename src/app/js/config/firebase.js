const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyCbhcpkJsKQLzNVvIeJ71Yw2v2NQSOh3vs",
    authDomain: "plataforma-steacher.firebaseapp.com",
    databaseURL: "https://plataforma-steacher.firebaseio.com",
    projectId: "plataforma-steacher",
    storageBucket: "plataforma-steacher.appspot.com",
    messagingSenderId: "733779509324",
    appId: "1:733779509324:web:950d7cc1fb6099b6"
}

firebase.initializeApp(config);

module.exports = firebase;