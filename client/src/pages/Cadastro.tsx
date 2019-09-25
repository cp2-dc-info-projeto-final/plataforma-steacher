//#region Npm

import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

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
      <div className="row">
        <NavBar titulo="" />
      </div>
      <div className="row">
        <div className="col offset-m2 offset-l2 s12 m8 l8" style={{marginTop:"-3%"}}>
          <Card form="cadastro" />
        </div>
      </div>
    </Background>
  );
}
