import React from 'react';

import LoginComponent from '../components/home/login/Login';
import { Background } from '../App.style';

export default function Login() {

  return (
    <Background>
      <div className="columns is-mobile">
        <div className="column is-4 is-offset-one-third">
          <LoginComponent/>
        </div>
      </div>
    </Background>
  );
}
