//#region Interfaces

import { Action } from '../../../models/Store';

//#endregion

//#region Actions

const changeLoading = (display: boolean): Action =>{
    return {
        type: 'CHANGE-LOADING',
        payload: display
    }
}

//#endregion

export { changeLoading };


