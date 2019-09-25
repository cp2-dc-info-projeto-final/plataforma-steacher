//#region Npm

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

//#endregion

//#region Actions

import { changeEmail, changePassword, changeRedirect } from '../../../store/actions/auth/common';

//#endregion

//#region Functions

import { signIn } from '../../../helpers/database/firebase/auth';

//#endregion

//#region Interfaces

import { State } from '../../../models/Store';
import Input from '../inputs/TextInput';
import SendButton from '../inputs/SendButton';
import { Link, Redirect } from 'react-router-dom';

//#endregion

//#region Components



//#endregion

export default function FormLogin() {

    const dispatch = useDispatch();

    //#region States

    const email = useSelector((state: State) => state.login.email);
    const password = useSelector((state: State) => state.login.password);
    const redirect = useSelector((state: State) => state.auth.redirect);

    //#endregion

    //#region OnChanges

    const onChangeEmail = (event: any): void => {
        dispatch(changeEmail(event.target.value));
    }

    const onChangePassword = (event: any): void => {
        dispatch(changePassword(event.target.value));
    }

    const onChangeRedirect = (value: boolean): void => {
        dispatch(changeRedirect(value));
    }

    //#endregion

    //#region OnClicks

    const onClickLogin = (event: any): void => {
        event.preventDefault();
        signIn(email, password)
            .then(result => {
                console.log(result);
                onChangeRedirect(true)
            })
            .catch(error => console.log(error.response.data))
    }

    //#endregion

    //#region XML

    return (
        <div>
            {redirect ? <Redirect to="/cadastro"/> : <></> }
        <form>
            <div className="row" style={{ marginBottom: "0%" }}>
                <div className="input-field col s12 m12 l12">
                    <div className="col offset-s2 offset-m2 offset-l2 s8 m8 l8">
                        <Input id="login" type="text" label="E-mail" onChange={onChangeEmail} />
                    </div>
                </div>
                <div className="input-field col s12 m12 l12" style={{ marginBottom: "-5%" }}>
                    <div className="col offset-s2 offset-m2 offset-l2 s8 m8 l8">
                        <Input id="senha" type="password" label="Senha" onChange={onChangePassword} />
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: "-10%" }}>
                <div className="col offset-s4 offset-m4 offset-l6 s8 m8 l6">
                    <Link to={'/'}><p>Esqueceu sua senha?</p></Link>
                </div>
            </div>
            <div className="row" style={{ marginTop: "4%", marginBottom: "-2%" }}>
                <div className="center col s12 m12 l12">
                    <SendButton label="Entrar" width="50%" onClick={onClickLogin} />
                </div>
            </div>
            <br />
        </form>
        </div>
    );

    //#endregion
}
