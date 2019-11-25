//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl } from '../../../global/Paths';

//#endregion


//#region Functions

const getSubjects = () => {
    return axios.post(localServerUrl + 'getSubjects');
}

const setSubject = (name: string) => {
    return axios.post(localServerUrl + 'setSubject', { name: name });
}

const deleteSubject = (id: string) => {
    return axios.post(localServerUrl + 'deleteSubject', { id: id });
}

//#endregion

export {
    getSubjects,
    setSubject,
    deleteSubject
};