//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl, serverUrl } from '../../../global/Paths';

//#endregion

//#region Functions

const signUp = (email: string, password: string) => {
    return axios.post(localServerUrl + 'signUp', { email: email, password: password });
}

const signIn = (email: string, password: string) => {
    return axios.post(localServerUrl + 'signIn', { email: email, password: password });
}

//#endregion

export { signIn, signUp };