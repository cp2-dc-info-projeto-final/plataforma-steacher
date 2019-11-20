//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl } from '../../../global/Paths';

//#endregion

//#region Interfaces

import UserData from '../../../models/UserData';

//#endregion

//#region Functions

const signUp = (data: UserData) => {
    return axios.post(localServerUrl + 'signUp', { data: data });
}

const signIn = (email: string, password: string) => {
    return axios.post(localServerUrl + 'signIn', { email: email, password: password });
}

const signOut = () => {
    return axios.post(localServerUrl + 'signOut');
}

const passwordRecover = (email: string) => {
    return axios.post(localServerUrl + 'passwordRecover', { email: email });
}

const isLogged = () =>{
    return axios.post(localServerUrl + 'isLogged', {});
}

//#endregion

export { signIn, signUp, signOut, passwordRecover, isLogged };