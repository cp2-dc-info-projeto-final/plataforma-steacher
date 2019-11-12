//#region Interfaces

import { Action } from '../../../models/Store';

//#endregion

//#region Actions

const alterMessage = (message: string): Action =>{
    return {
        type: 'CHANGE-MESSAGE',
        payload: message
    }
}

//#endregion

export { alterMessage };


