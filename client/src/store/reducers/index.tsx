//#region Npm

import { combineReducers } from "redux";

//#endregion

//#region Reducers

import { messageReducer } from "./notifications/notifications";
import { loadingReducer } from "./loading/loading";
import { authReducer, userReducer } from "./auth/auth";
import { chatsReducer, groupsReducer, classesReducer } from "./chats/chats";
import { routeReducer } from "./route/route";

//#endregion

//#region Combines

const authReducers = combineReducers({
    auth: authReducer,
    user: userReducer
});

const notificationsReducers = combineReducers({
    message: messageReducer
});

const loadingReducers = combineReducers({
    loading: loadingReducer
});

const chatsReducers = combineReducers({
    chats: chatsReducer,
    groups: groupsReducer,
    classes: classesReducer
})

const routeReducers = combineReducers({
    page: routeReducer
})

const rootReducers = combineReducers({
    auth: authReducers,
    loadingScreen: loadingReducers,
    notifications: notificationsReducers,
    chats: chatsReducers,
    route: routeReducers
});

//#endregion

export default rootReducers;