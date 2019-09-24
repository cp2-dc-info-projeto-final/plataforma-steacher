//#region Interfaces

import { Action } from '../../../models/Store';

//#endregion

//#region Default Reducers

const attaches = (state: any, type: string, code: string, dado?: any) => {
    switch (type) {
        case code:
            return state = dado;

        default:
            return state;
    };
}

//#endregion

//#region Reducers

const emailReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-EMAIL', action.payload);
};

const passwordReducer = (state: string = '', action: Action) => {
    return attaches(state, action.type, 'CHANGE-PASSWORD', action.payload);
};

const passwordVisibilityReducer = (state: boolean = false, action: Action) =>{
    return attaches(state, action.type, 'CHANGE-PASSWORD-VISIBILITY', !state);
}

//#endregion

export { emailReducer, passwordReducer, passwordVisibilityReducer};