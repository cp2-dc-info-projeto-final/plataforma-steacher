//#region Npm

import axios from 'axios';

//#endregion

//#region Url

const serverUrl = 'https://dashboard.heroku.com/apps/steacher-server/';
const testUrl = 'http://localhost:8000/';

//#endregion

//#region Functions

const signIn = (email: string, password: string) => {
    return axios.post(testUrl + 'signIn', { email: email, password: password });
}

//#endregion

export { signIn };