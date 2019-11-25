//#region Interfaces

import { Action } from '../../../models/Store';

//#endregion

//#region Actions

const changePage = (page: string): Action => {
    return {
        type: 'CHANGE-PAGE',
        payload: page
    }
}

//#endregion

export { changePage };


