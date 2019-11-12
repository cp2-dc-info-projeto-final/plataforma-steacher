//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl } from '../../../global/Paths';

//#endregion

//#region Interfaces

import UserData from '../../../models/User';

//#endregion

//#region Functions

const signUp = (data: UserData) => {
    return axios.post(localServerUrl + 'signUp', { data: data });
}

const signIn = (email: string, password: string) => {
    return axios.post(localServerUrl + 'signInStudent', { email: email, password: password });
}

const signOut = () => {
    return axios.post(localServerUrl + 'signOut');
}

const passwordRecover = (email: string) => {
    return axios.post(localServerUrl + 'passwordRecover', { email: email });
}

//#endregion

export { signIn, signUp, signOut, passwordRecover };