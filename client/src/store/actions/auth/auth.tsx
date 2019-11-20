//#region Interfaces

import { Action } from '../../../models/Store';

//#endregion

//#region Actions

const changeAuth = (auth: boolean): Action =>{
    return {
        type: 'CHANGE-AUTH',
        payload: auth
    }
}

//#endregion

export { changeAuth };


