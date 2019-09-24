//#region Npm 

import { createStore } from 'redux';

//#endregion

//#region Reducers

import reducers from './reducers';

//#endregion

const store = createStore(reducers);

export default store;