//#region Npm

import { combineReducers } from "redux";

//#endregion

//#region Reducers

import { messageReducer } from "./notifications/notifications";
import { loadingReducer } from "./loading/loading";

//#endregion

//#region Combines

const notificationsReducers = combineReducers({
    message: messageReducer
});

const loadingReducers = combineReducers({
    loading: loadingReducer
})

const rootReducers = combineReducers({
    loadingScreen: loadingReducers,
    notifications: notificationsReducers
});

//#endregion

export default rootReducers;