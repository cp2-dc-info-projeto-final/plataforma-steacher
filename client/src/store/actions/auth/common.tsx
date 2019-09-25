import { Action } from '../../../models/Store';

const changeEmail = (value: string): Action =>{
    return {
        type: 'CHANGE-EMAIL',
        payload: value
    };
};

const changePassword = (value: string): Action =>{
    return {
        type: 'CHANGE-PASSWORD',
        payload: value
    };
};

const changeRedirect = (value: boolean): Action =>{
    return {
        type: 'CHANGE-REDIRECT',
        payload: value
    };
};

export { changeEmail, changePassword, changeRedirect };