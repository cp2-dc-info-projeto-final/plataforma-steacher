//#region Npm

import { combineReducers } from "redux";

//#endregion

//#region Reducers

import { emailReducer, passwordReducer } from "./auth/login";
import { nameReducer, subNameReducer, emailReducerC, confirmEmailReducer, confirmPasswordReducer, registrationReducer, accountTypeReducer, passwordReducerC } from "./auth/cadastro";
import { redirectReducer, passwordRecoverReducer } from "./auth/common";

//#endregion

//#region Combines

const loginReducers = combineReducers({
    email: emailReducer,
    password: passwordReducer,
});

const cadastroReducers = combineReducers({
    name: nameReducer,
    subname: subNameReducer,
    registration: registrationReducer,
    accountType: accountTypeReducer,
    email: emailReducerC,
    emailConfirm: confirmEmailReducer,
    password: passwordReducerC,
    passwordConfirm: confirmPasswordReducer
})

const authReducers = combineReducers({
    redirect: redirectReducer,
    passwordRecover: passwordRecoverReducer
})

const rootReducers = combineReducers({
    login: loginReducers,
    cadastro: cadastroReducers,
    auth: authReducers
})

//#endregion

export default rootReducers;