//#region Npm

import React from 'react';

//#endregion

//#region Material-ui

import { makeStyles } from '@material-ui/core/styles';

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

//#endregion

//#region Propriedades

type Props = {

}

//#endregion


export default function Form(props: Props) {
  const dispatch = useDispatch();

  //#region States



  //#endregion

  //#region OnChanges



  //#endregion

  //#region OnClicks



  //#endregion

  //#region XML

  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <Input id="name" type="text" label="Nome" style={{ marginLeft: "2%" }} />
        </div>
        <div className="input-field col s6">
          <Input id="sobrenome" type="text" label="Sobrenome" style={{ width: "98%" }} />
        </div>
        <div className="input-field col s6">
          <Input id="email" type="email" label="E-mail" style={{ marginLeft: "2%" }} />
        </div>
        <div className="input-field col s6">
          <Input id="senha" type="password" label="Senha" style={{ width: "98%" }} />
        </div>
        <div className="input-field col s6">
          <Input id="matricula" type="text" label="Matricula" style={{ marginLeft: "2%" }} />
        </div>
        <div className="input-field col s6">
          <RadioButton name="turma" label={['Aluno', 'Professor']} value="" onChange="" />
        </div>
        <div className="center col s12">
          <SendButton />
        </div>
      </div>
      <br/>
    </form>
  );

  //#endregion
}

