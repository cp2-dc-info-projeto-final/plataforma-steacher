//#region Npm

import React from 'react';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components

import { Background } from '../App.style';
import NavBar from '../components/navBar/NavBar';
import Input from '../components/auth/inputs/TextInput';
import SendButton from '../components/auth/inputs/SendButton';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../models/Store';
import { changePasswordConfirm } from '../store/actions/auth/cadastro';
import { passwordRecover } from '../helpers/database/firebase/auth';
import { changePasswordRecover, changeRedirect } from '../store/actions/auth/common';
import { Redirect } from 'react-router';

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function PasswordRecover(props: Props) {
    const dispatch = useDispatch();

    //#region States

    const email = useSelector((state: State) => state.auth.passwordRecover);
    const redirect = useSelector((state: State) => state.auth.redirect);

    //#endregion

    //#region OnChanges

    const changeEmail = (event: any) => {
        dispatch(changePasswordRecover(event.target.value));
    }

    const onChangeRedirect = (value: boolean): void => {
        dispatch(changeRedirect(value));
    }

    //#endregion

    //#region OnClick

    const onClickSendButton = (event: any): void => {
        event.preventDefault();
        passwordRecover(email)
            .then(result =>{
                console.log(result);
                onChangeRedirect(true);
            })
            .catch(error => console.log(error.response.data));
    }

    //#endregion

    //#region XML

    return (
        <Background>
            {redirect ? <Redirect to="/"/> : <></> }
            <div className="row">
                <NavBar titulo="" link="/passwordRecover" />
            </div>
            <div className="row">
                <div className="col offset-m2 offset-l2 s12 m8 l8" style={{ marginTop: "-3%" }}>
                    <div className="container" style={{ width: "50%", marginTop: "13%" }}>
                        <NavBar link="/passwordRecover" titulo="Autentificação" style={{ marginTop: "8%", marginBottom: "0%", borderRadius: "100% 100% 0% 0%" }} styleTitulo={{ paddingBottom: "20%" }} />
                        <div className="card grey lighten-2  hoverable" style={{ marginTop: "0%", borderTopLeftRadius: "0%", borderTopRightRadius: "0%" }}>
                            <h6 style={{ marginTop: "0%", marginLeft: "2%" }} >Digite seu e-mail para enviarmos uma mensagem de recuperação de senha.</h6>
                            <form>
                                <div className="row" style={{ marginBottom: "0%" }}>
                                    <div className="input-field col s12 m12 l12">
                                        <div className="col offset-s2 offset-m2 offset-l2 s8 m8 l8">
                                            <Input id="login" type="text" label="E-mail" value={email} onChange={changeEmail}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "4%", marginBottom: "-2%" }}>
                                    <div className="center col s12 m12 l12">
                                        <SendButton label="Enviar" width="50%" onClick={onClickSendButton}/>
                                    </div>
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    );

    //#endregion
}