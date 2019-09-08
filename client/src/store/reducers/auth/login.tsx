//#region Interfaces

import { Action } from '../../../models/Store';

//#endregion

//#region Reducers

const emailReducer = (state: string = '', action: Action ) =>{
    const dado = action.payload;

    switch (action.type) {
        case 'CHANGE-EMAIL':
            return state = dado;
    
        default:
            return state;
    };
};

const passwordReducer = (state: string = '', action: Action ) =>{
    const dado = action.payload;

    switch (action.type) {
        case 'CHANGE-PASSWORD':
            return state = dado;
    
        default:
            return state;
    };
};

//#endregion

export { emailReducer, passwordReducer };