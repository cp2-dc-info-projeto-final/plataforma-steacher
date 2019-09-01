import React from 'react';

import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/cadastro" component={Cadastro}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;