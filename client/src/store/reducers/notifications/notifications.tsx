//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';

//#endregion

//#region Reducers

const messageReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-MESSAGE', action.payload);
};

//#endregion

export { messageReducer };