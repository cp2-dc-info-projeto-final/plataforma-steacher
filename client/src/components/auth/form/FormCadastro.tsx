//#region Npm

import React from 'react';

//#endregion

//#region Actions

import { useSelector, useDispatch } from 'react-redux';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components

import Input from '../inputs/TextInput';
import RadioButton from '../inputs/RadioButton';
import SendButton from '../inputs/SendButton';
import { State } from '../../../models/Store';
import { changeEmailConfirm, changePasswordConfirm, changeName, changeSubName, changeRegistration, changeAccountType } from '../../../store/actions/auth/cadastro';
import { changePassword, changeEmail } from '../../../store/actions/auth/common';
import { signUp } from '../../../helpers/database/firebase/auth';

//#endregion

//#region Propriedades

type Props = {

}

//#endregion


export default function FormCadastro(props: Props) {
  const dispatch = useDispatch();

  //#region States

  const name = useSelector((state: State) => state.cadastro.name);
  const subName = useSelector((state: State) => state.cadastro.subname);
  const registration = useSelector((state: State) => state.cadastro.registration);
  const accountType = useSelector((state: State) => state.cadastro.accountType);
  const email = useSelector((state: State) => state.cadastro.email);
  const emailConfirm = useSelector((state: State) => state.cadastro.emailConfirm);
  const password = useSelector((state: State) => state.cadastro.password);
  const passwordConfirm = useSelector((state: State) => state.cadastro.passwordConfirm);

  //#endregion

  //#region OnChanges

  const onChangeName = (event: any): void => {
    dispatch(changeName(event.target.value));
  }
  
  const onChangeSubName = (event: any): void => {
    dispatch(changeSubName(event.target.value));
  }

  const onChangeRegistration = (event: any): void => {
    dispatch(changeRegistration(event.target.value));
  }

  const onChangeAccountType = (event: any): void => {
    dispatch(changeAccountType(event.target.value));
  }

  const onChangeEmail = (event: any): void => {
    dispatch(changeEmail(event.target.value));
  }

  const onChangeEmailConfirm = (event: any): void => {
    dispatch(changeEmailConfirm(event.target.value));
  }

  const onChangePassword = (event: any): void => {
    dispatch(changePassword(event.target.value));
  }

  const onChangePasswordConfirm = (event: any): void => {
    dispatch(changePasswordConfirm(event.target.value));
  }

  //#endregion

  //#region OnClicks

  const onClickSendButton = (event: any): void =>{
    event.preventDefault();
    signUp(email, password)
        .then(result => console.log(result))
        .catch(error => console.log(error.response.data));
  }

  //#endregion

  //#region XML

  return (
    <form>
      <div className="row" style={{ marginBottom: "0%" }}>
        <div className="input-field col s6 m6">
          <Input id="name" type="text" label="Nome" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={name} onChange={onChangeName}/>
        </div>
        <div className="input-field col s6 m6">
          <Input id="sobrenome" type="text" label="Sobrenome" style={{ marginLeft: "10%", width: "70%" }} value={subName} onChange={onChangeSubName}/>
        </div>
      </div>
      <div className="row" style={{ marginTop: "-10%" }}>
        <div className="input-field col s6">
          <Input id="email" type="email" label="E-mail" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={email} onChange={onChangeEmail}/>
        </div>
        <div className="input-field col s6">
          <Input id="cEmail" type="email" label="Confirmação e-mail" style={{ marginLeft: "11%", width: "70%" }} value={emailConfirm} onChange={onChangeEmailConfirm}/>
        </div>
      </div>
      <div className="row" style={{ marginTop: "-10%" }}>
        <div className="input-field col s6">
          <Input id="senha" type="password" label="Senha" style={{ marginLeft: "11%", width: "70%" }} value={password} onChange={onChangePassword}/>
        </div>
        <div className="input-field col s6">
          <Input id="cSenha" type="password" label="Confirmação senha" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={passwordConfirm} onChange={onChangePasswordConfirm}/>
        </div>
      </div>
      <div className="row" style={{ marginTop: "-10%" }}>
        <div className="input-field col s6">
          <Input id="matricula" type="text" label="Matricula" style={{ marginLeft: "10%", marginRight: "10%", width: "70%" }} value={registration} onChange={onChangeRegistration}/>
        </div>
        <div className="input-field col s6">
          <RadioButton name="turma" label={['Aluno', 'Professor']} value={accountType} onChange={onChangeAccountType} />
        </div>
      </div>
      <div className="row" style={{ marginTop: "-10%", marginBottom: "-2%" }}>
        <div className="center col s12">
          <SendButton label="Enviar" width="30%" onClick={onClickSendButton}/>
        </div>
      </div>
      <br />
    </form>
  );

  //#endregion
}

