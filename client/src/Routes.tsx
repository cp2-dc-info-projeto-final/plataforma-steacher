import React from 'react';

import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;