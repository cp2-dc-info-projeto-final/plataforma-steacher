import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import { Background } from '../App.style';
import NavBar from '../components/navBar/NavBar';
import Card from '../components/auth/card/Card';
import LinkButton from '../components/auth/inputs/LinkButton';
import Loading from '../components/loading/Loading';

export default function Login() {

  return (
    <Background>
      <Loading></Loading>
      <div>
        <div className="row">
          <NavBar titulo="" />
        </div>
        <div className="row">
          <div className="col offset-m2 offset-l2 s12 m8 l8" style={{ marginTop: "-3%" }}>
            <Card form="login" />
          </div>
          <div className="col offset-m4 offset-l4 s4 m4 l4 center">
            <LinkButton link="cadastro" label="Cadastre-se" width="80%"></LinkButton>
          </div>
        </div>
      </div>
      <Loading></Loading>
    </Background>
  );
}
