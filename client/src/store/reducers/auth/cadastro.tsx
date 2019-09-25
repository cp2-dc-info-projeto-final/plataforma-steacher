//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';

//#endregion

//#region Reducers

const nameReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-NAME', action.payload);
};

const subNameReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-SUBNAME', action.payload);
};

const registrationReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-RESGISTRATION', action.payload);
};

const accountTypeReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-ACCOUNTTYPE', action.payload);
};

const emailReducerC = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-EMAIL', action.payload);
};

const confirmEmailReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-EMAIL-CONFIRM', action.payload);
};

const passwordReducerC = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-PASSWORD', action.payload);
};

const confirmPasswordReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-PASSWORD-CONFIRM', action.payload);
};

//#endregion

export {
    nameReducer,
    subNameReducer,
    registrationReducer,
    accountTypeReducer,
    emailReducerC,
    confirmEmailReducer,
    passwordReducerC,
    confirmPasswordReducer
};