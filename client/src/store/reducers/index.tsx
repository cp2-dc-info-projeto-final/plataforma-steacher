//#region Npm

import { combineReducers } from "redux";

//#endregion

//#region Reducers

import { messageReducer } from "./notifications/notifications";
import { loadingReducer } from "./loading/loading";
import { authReducer } from "./auth/auth";

//#endregion

//#region Combines

const authReducers = combineReducers({
    auth: authReducer
});

const notificationsReducers = combineReducers({
    message: messageReducer
});

const loadingReducers = combineReducers({
    loading: loadingReducer
})

const rootReducers = combineReducers({
    auth: authReducers,
    loadingScreen: loadingReducers,
    notifications: notificationsReducers
});

//#endregion

export default rootReducers;