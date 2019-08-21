import React from 'react';

import 'bulma/css/bulma.min.css';
import { Image, Card, Title } from './Styles';
import Form from './form/Form';

const pub = process.env.PUBLIC_URL;

export default function Login() {
  return (
    <Card className="card">
      <Image src={pub + '/assets/logo.png'} alt="Logo Steacher" />

      <Title>Steacher</Title>

      <Form />

      <br></br>
    </Card>
  );
}