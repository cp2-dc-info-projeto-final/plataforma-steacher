//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';

//#endregion

//#region Reducers

const authReducer = (auth: boolean = false, action: Action) => {
    return attaches(auth, action.type, 'CHANGE-AUTH', action.payload);
};

//#endregion

export { authReducer };