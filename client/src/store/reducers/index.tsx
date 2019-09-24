//#region Npm

import { combineReducers } from "redux";

//#endregion

//#region Reducers

import { emailReducer, passwordReducer, passwordVisibilityReducer } from "./auth/login";

//#endregion

//#region Combines

const loginReducers = combineReducers({
    email: emailReducer,
    password: passwordReducer,
});

const passwordReducers = combineReducers({
    visibility: passwordVisibilityReducer
})

const rootReducers = combineReducers({
    login: loginReducers,
    password: passwordReducers
})

//#endregion

export default rootReducers;