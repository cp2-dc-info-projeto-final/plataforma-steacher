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

const changePasswordVisibility = (): Action =>{
    return {
        type: 'CHANGE-PASSWORD-VISIBILITY'
    }
}

export { changeEmail, changePassword, changePasswordVisibility };