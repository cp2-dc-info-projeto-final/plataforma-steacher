import React from 'react';

import 'bulma/css/bulma.min.css';

import { Card } from '../Home.styles';
import { Title, BigButton, Image, TitleSub } from './Login.styles';
import Form from './form/Form';

const pub = process.env.PUBLIC_URL;

export default function Login() {
  return (
    <div>
      <Title>BEM VINDO AO</Title>
      <TitleSub>STEACHER!</TitleSub>

      <Card className="card">
          <Image src={pub + '/assets/logo.png'} alt="Logo Steacher" />

          <Form />

        <br></br>
      </Card>

      <hr className="uk-divider-icon" style={{backgroundColor: 'rgba(0,0,0,0)'}}></hr>

      <BigButton className="button is-info is-rounded">Cadastre-se</BigButton>

    </div>
  );
}