//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';

//#endregion

//#region Reducers

const emailReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-EMAIL', action.payload);
};

const passwordReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-PASSWORD', action.payload);
};

//#endregion

export { emailReducer, passwordReducer };