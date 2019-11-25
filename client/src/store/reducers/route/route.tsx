//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';

//#endregion

//#region Reducers

const routeReducer = (page: string = 'login', action: Action) => {
    return attaches(page, action.type, 'CHANGE-PAGE', action.payload);
};

//#endregion

export { routeReducer };