import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/home/Home';
import PasswordRecover from './pages/PasswordRecover';
import { useSelector } from 'react-redux';
import { State } from './models/Store';
import Admin from './pages/admin/Admin';
import AdminCourses from './pages/admin/courses/AdminCourses';
import AdminClasses from './pages/admin/schoolClasses/AdminClasses';
import AdminSubjects from './pages/admin/subjects/AdminSubjects';
import AdminTeachers from './pages/admin/teachers/AdminTeachers';

export default function Routes() {
    const PrivateRoute = ({ component: Component, ...rest }: any): any => {
        const isLogged = useSelector((state: State) => state.auth.auth);
        return <Route
            {...rest}
            render={props => isLogged ? (<Component {...props} />) : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/passwordRecover" component={PasswordRecover} />
                {/* <PrivateRoute path="/home" component={Home} /> */}
                {/* <PrivateRoute path="/admin" component={Admin} /> */}
                {/* <PrivateRoute path="/admin/courses" component={AdminCourses} /> */}
                {/* <PrivateRoute path="/admin/classes" component={AdminClasses} /> */}
                {/* <PrivateRoute path="/admin/subjects" component={AdminSubjects} /> */}
                {/* <PrivateRoute path="/admin/teachers" component={AdminTeachers} /> */}
                <Route exact path="/admin" component={Admin} />
                <Route path="/admin/courses" component={AdminCourses} />
                <Route path="/admin/classes" component={AdminClasses} />
                <Route path="/admin/subjects" component={AdminSubjects} />
                <Route path="/admin/teachers" component={AdminTeachers} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );


};