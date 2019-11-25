//#region Npm

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//#endregion

//#region Actions

import { alterMessage } from '../../../store/actions/notifications/notifications';
import { changeLoading } from '../../../store/actions/loading/loading';
import { changeAuth, changeUser } from '../../../store/actions/auth/auth';

//#endregion

//#region Functions

import { signIn } from '../../../helpers/database/firebase/auth';

//#endregion

//#region Interfaces

import { State } from '../../../models/Store';

//#endregion

//#region Components

import Input from '../inputs/TextInput';
import SendButton from '../inputs/SendButton';
import { buscaDados } from './buscaDados';

//#endregion

export default function FormLogin() {
    const dispatch = useDispatch();

    //#region States

    const [email = '', setEmail] = useState();
    const [password = '', setPassword] = useState();
    const [redirect, setRedirect] = useState();

    const notification = useSelector((state: State) => state.notifications.message);

    //#endregion

    //#region Toasts

    toast.configure();

    const notifyError = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    // const notifySuccess = (message: string) => {
    //     toast.success(message, {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // }

    const externalNotify = (message: string) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    if (notification) {
        let message = notification;
        externalNotify(message);
        dispatch(alterMessage(''));
    }

    //#endregion

    //#region OnChanges

    const onChangeEmail = (event: any): void => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event: any): void => {
        setPassword(event.target.value);
    }

    const onChangeRedirect = (value: boolean): void => {
        setRedirect(value);
    }

    //#endregion

    //#region OnClicks

    const onClickLogin = (event: any): void => {
        event.preventDefault();
        dispatch(changeLoading(true));
        signIn(email, password)
            .then(user => {
                setTimeout(() => {
                    dispatch(changeAuth(true));
                    onChangeRedirect(true);
                    dispatch(changeUser(user.data))
                }, 400)
            })
            .catch(error => {
                console.log(error);
                setTimeout(() => {
                    dispatch(changeLoading(false));
                    notifyError(error.response.data);
                }, 400)
            })
    }

    //#endregion

    //#region XML

    return (
        <div>
            {redirect ? <Redirect to="/home" /> : <></>}

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
                        <Link to={'/passwordRecover'}><p>Esqueceu sua senha?</p></Link>
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
