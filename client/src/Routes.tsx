import React from 'react';

import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import PasswordRecover from './pages/PasswordRecover';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/passwordRecover" component={PasswordRecover}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;