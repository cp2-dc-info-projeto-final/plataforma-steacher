//#region Interfaces

import { Action } from '../../../models/Store';
import User from '../../../models/User';

//#endregion

//#region Actions

const changeAuth = (auth: boolean): Action => {
    return {
        type: 'CHANGE-AUTH',
        payload: auth
    }
}

const changeUser = (user: User | null): Action => {
    return{
        type: 'CHANGE-USER',
        payload: user
    }
}

//#endregion

export { changeAuth, changeUser };


