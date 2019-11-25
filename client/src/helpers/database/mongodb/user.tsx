//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl } from '../../../global/Paths';

//#endregion


//#region Functions

const getUser = (id: string) => {
    return axios.post(localServerUrl + 'getUser', { id: id });
}

const putUser = (id: string, modification: any) =>{
    return axios.post(localServerUrl + 'putUser', {id: id, modification: modification});
}

const deleteUser = (id: string) =>{
    return axios.post(localServerUrl + 'deleteUser', {id: id});
}

//#endregion

export { getUser, putUser, deleteUser };