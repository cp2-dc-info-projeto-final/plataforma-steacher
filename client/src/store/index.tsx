//#region Npm 

import { createStore } from 'redux';

//#endregion

//#region Reducers

import { loginReducers } from './reducers';

//#endregion

const store = createStore(loginReducers);

export default store;