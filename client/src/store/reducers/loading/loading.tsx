//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';

//#endregion

//#region Reducers

const loadingReducer = (display: boolean = false, action: Action) => {
    return attaches(display, action.type, 'CHANGE-LOADING', action.payload);
};

//#endregion

export { loadingReducer };