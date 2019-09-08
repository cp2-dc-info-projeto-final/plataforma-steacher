//#region Npm

import { combineReducers } from "redux";

//#endregion

//#region Reducers

import { emailReducer, passwordReducer } from "./auth/login";

//#endregion

//#region Combines

const loginReducers = combineReducers({
    email: emailReducer,
    password: passwordReducer
});

//#endregion

export { loginReducers };