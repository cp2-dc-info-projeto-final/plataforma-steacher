//#region Interfaces

import { Action } from '../../../models/Store';
import { Chat } from '../../../models/Chat';
import { Group } from '../../../models/Group';

//#endregion

//#region Actions

const setChats = (chats: Chat[]): Action => {
    return {
        type: 'SET-CHATS',
        payload: chats
    }
}

const setGroups = (groups: Group[]): Action => {
    return {
        type: 'SET-GROUPS',
        payload: groups
    }
}

const setClasses = (classes: Group[]): Action => {
    return {
        type: 'SET-CLASSES',
        payload: classes
    }
}


//#endregion

export { setChats, setGroups, setClasses };


