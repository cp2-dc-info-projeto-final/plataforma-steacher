//#region Npm

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';

//#endregion

//#region Actions

import { alterMessage } from '../../../store/actions/notifications/notifications';
import { changeLoading } from '../../../store/actions/loading/loading';
import { changeAuth } from '../../../store/actions/auth/auth';

//#endregion

//#region Functions

import { signUp } from '../../../helpers/database/firebase/auth';

//#endregion

//#region Components

import Input from '../inputs/TextInput';
import SendButton from '../inputs/SendButton';

//#endregion

//#region Propriedades

type Props = {

};

//#endregion

export default function FormCadastro(props: Props) {
  const dispatch = useDispatch();

  //#region States

  const [name = '', setName] = useState();
  const [subName = '', setSubName] = useState();
  const [registration = '', setRegistration] = useState();
  const [email = '', setEmail] = useState();
  const [emailConfirm = '', setEmailConfirm] = useState();
  const [password = '', setPassword] = useState();
  const [passwordConfirm = '', setPasswordConfirm] = useState();
  const [redirect = false, setRedirect] = useState();

  //#endregion

  //#region Toasts

  toast.configure();

  const notifyError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  // const notifySuccess = (message: string) => {
  //   toast.success(message, {
  //     position: toast.POSITION.TOP_RIGHT
  //   });
  // }

  //#endregion

  //#region OnChanges

  const changeName = (event: any): void => {
    setName(event.target.value);
  }

  const changeSubName = (event: any): void => {
    setSubName(event.target.value);
  }

  const changeRegistration = (event: any): void => {
    setRegistration(event.target.value);
  }

  const changeEmail = (event: any): void => {
    setEmail(event.target.value);
  }

  const changeEmailConfirm = (event: any): void => {
    setEmailConfirm(event.target.value);
  }

  const changePassword = (event: any): void => {
    setPassword(event.target.value);
  }

  const changePasswordConfirm = (event: any): void => {
    setPasswordConfirm(event.target.value);
  }

  const changeRedirect = (value: boolean): void => {
    setRedirect(value);
  }

  //#endregion

  //#region OnClicks

  const send = (event: any): void => {
    event.preventDefault();
    dispatch(changeLoading(true));

    const data = {
      name: name,
      subName: subName,
      email: email,
      emailConfirm: emailConfirm,
      password: password,
      passwordConfirm: passwordConfirm,
      registration: registration,
    };

    signUp(data)
      .then(() => {
        setTimeout(() => {
          dispatch(changeLoading(false));
          toast.dismiss();
          dispatch(alterMessage('Usuário criado com sucesso.'))
          dispatch(changeAuth(true));
          changeRedirect(true);
        }, 400);
      })
      .catch(error => {
        setTimeout(() => {
          dispatch(changeLoading(false));
          console.log(error.response.data)
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
          <div className="input-field col s6 m6">
            <Input id="name" type="text" label="Nome" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={name} onChange={changeName} />
          </div>
          <div className="input-field col s6 m6">
            <Input id="sobrenome" type="text" label="Sobrenome" style={{ marginLeft: "10%", width: "70%" }} value={subName} onChange={changeSubName} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "-10%" }}>
          <div className="input-field col s6">
            <Input id="email" type="email" label="E-mail" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={email} onChange={changeEmail} />
          </div>
          <div className="input-field col s6">
            <Input id="cEmail" type="email" label="Confirmação e-mail" style={{ marginLeft: "11%", width: "70%" }} value={emailConfirm} onChange={changeEmailConfirm} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "-10%" }}>
          <div className="input-field col s6">
            <Input id="senha" type="password" label="Senha" style={{ marginLeft: "11%", width: "70%" }} value={password} onChange={changePassword} />
          </div>
          <div className="input-field col s6">
            <Input id="cSenha" type="password" label="Confirmação senha" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={passwordConfirm} onChange={changePasswordConfirm} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "-10%" }}>
          <div className="input-field col s6">
            <Input id="matricula" type="text" label="Matrícula" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={registration} onChange={changeRegistration} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "-10%", marginBottom: "-2%" }}>
          <div className="center col s12">
            <SendButton label="Enviar" width="30%" onClick={send} />
          </div>
        </div>
        <br />
      </form>

    </div>
  );

  //#endregion
}

