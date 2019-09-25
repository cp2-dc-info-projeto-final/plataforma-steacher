import { Action } from '../../../models/Store';

const changeName = (value: string): Action =>{
    return {
        type: 'CHANGE-NAME',
        payload: value
    };
};

const changeSubName = (value: string): Action =>{
    return {
        type: 'CHANGE-SUBNAME',
        payload: value
    };
};

const changeRegistration = (value: string): Action =>{
    return {
        type: 'CHANGE-REGISTRATION',
        payload: value
    };
};

const changeAccountType = (value: string): Action =>{
    return {
        type: 'CHANGE-ACCOUNTTYPE',
        payload: value
    };
};

const changeEmailConfirm = (value: string): Action =>{
    return {
        type: 'CHANGE-EMAIL-CONFIRM',
        payload: value
    };
};

const changePasswordConfirm = (value: string): Action =>{
    return {
        type: 'CHANGE-PASSWORD-CONFIRM',
        payload: value
    };
};

export {
    changeName,
    changeSubName,
    changeRegistration,
    changeAccountType,
    changeEmailConfirm,
    changePasswordConfirm 
};