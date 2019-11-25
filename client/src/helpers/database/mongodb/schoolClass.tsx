//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl } from '../../../global/Paths';

//#endregion


//#region Functions

const getClasses = () => {
    return axios.post(localServerUrl + 'getClasses');
}

const setClass = (name: string, course: any) => {
    return axios.post(localServerUrl + 'setClass', { name: name, course: course });
}

// const putClass = (id: string, materia: string) => {
//     return axios.post(localServerUrl + 'putClass', { id: id, materia: materia });
// }

const deleteClass = (id: string) => {
    return axios.post(localServerUrl + 'deleteClass', { id: id });
}

//#endregion

export {
    getClasses,
    setClass,
    // putClass,
    deleteClass
};