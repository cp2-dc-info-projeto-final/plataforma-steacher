//#region Npm

import React from 'react';

import 'materialize-css/dist/css//materialize.min.css';

//#endregion

//#region Material-Ui

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components

import NavBar from '../components/navBar/NavBar';
import Card from '../components/auth/card/Card';
import Titulo from '../components/auth/titulo/Titulo';
import { Background } from '../App.style';

//#endregion

//#region Styles


//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function Cadastro(props: Props) {

  return (
    <Background>
      <NavBar titulo="Steacher"/>
      <Card form="cadastro" />
    </Background>
  );
}
