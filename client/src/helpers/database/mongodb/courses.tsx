//#region Npm

import axios from 'axios';

//#endregion

//#region Paths

import { localServerUrl } from '../../../global/Paths';

//#endregion


//#region Functions

const getCourses = () => {
    return axios.post(localServerUrl + 'getCourses');
}

const setCourse = (name: string, subjects: string[]) => {
    return axios.post(localServerUrl + 'setCourse', { name: name, subjects: subjects });
}

const putCourse = (id: string, materia: string) => {
    return axios.post(localServerUrl + 'putCourse', { id: id, materia: materia });
}

const deleteCourse = (id: string) => {
    return axios.post(localServerUrl + 'deleteCourse', { id: id });
}

//#endregion

export {
    getCourses,
    setCourse,
    putCourse,
    deleteCourse
};