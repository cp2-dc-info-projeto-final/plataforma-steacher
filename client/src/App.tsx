import React from 'react';

import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';
import 'materialize-css/dist/css/materialize.min.css'

export default function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
