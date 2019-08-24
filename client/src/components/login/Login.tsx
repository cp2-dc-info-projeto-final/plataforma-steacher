import React from 'react';

import 'bulma/css/bulma.min.css';
import 'uikit/dist/css/uikit.min.css';

import { Image, Card, Title, BigButton } from './Login.styles';
import Form from './form/Form';

const pub = process.env.PUBLIC_URL;

export default function Login() {
  return (
    <div>
      <Title>BEM VINDO AO STEACHER!</Title>

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