import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/home/Home';
import PasswordRecover from './pages/PasswordRecover';
import { useSelector } from 'react-redux';
import { State } from './models/Store';

const PrivateRoute = ({ component: Component, ...rest }: any): any => {
    const isLogged = useSelector((state: State) => state.auth.auth);
    
    return <Route
        {...rest}
        render={props => isLogged ? (<Component {...props} />) : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/passwordRecover" component={PasswordRecover} />
            {/* <PrivateRoute path="/home" component={Home} /> */}
            <Route exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes;