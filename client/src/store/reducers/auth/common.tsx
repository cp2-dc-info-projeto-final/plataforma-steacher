//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';

//#endregion

//#region Reducers

const redirectReducer = (state: boolean = false, action: Action) => {
    return attaches(state, action.type, 'CHANGE-REDIRECT', action.payload);
};

const passwordRecoverReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-PASSWORD-RECOVER', action.payload);
};

//#endregion

export { redirectReducer, passwordRecoverReducer };