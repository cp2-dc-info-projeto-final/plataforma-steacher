//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl } from '../../../global/Paths';

//#endregion


//#region Functions

const findTeachers = () => {
    return axios.post(localServerUrl + 'getTeachers');
}

//#endregion

export {
    findTeachers
};