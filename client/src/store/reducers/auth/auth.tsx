//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';
import User from '../../../models/User';

//#endregion

//#region Reducers

const authReducer = (auth: boolean = false, action: Action) => {
    return attaches(auth, action.type, 'CHANGE-AUTH', action.payload);
};

const userReducer = (user: User | null = null, action: Action) => {
    return attaches(user, action.type, 'CHANGE-USER', action.payload);
}

//#endregion

export { authReducer, userReducer };