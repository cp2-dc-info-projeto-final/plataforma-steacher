//#region Interfaces

import { Action } from '../../../models/Store';
import { attaches } from '../helpers/DefaultReducers';
import { Chat } from '../../../models/Chat';
import { Group } from '../../../models/Group';

//#endregion

//#region Reducers

const chatsReducer = (chats: Chat[] | null = null, action: Action) => {
    return attaches(chats, action.type, 'SET-CHATS', action.payload);
};

const groupsReducer = (groups: Group[] | null = null, action: Action) => {
    return attaches(groups, action.type, 'SET-CHATS', action.payload);
};

const classesReducer = (classes: Group[] | null = null, action: Action) => {
    return attaches(classes, action.type, 'SET-CHATS', action.payload);
};

//#endregion

export { chatsReducer, groupsReducer, classesReducer };