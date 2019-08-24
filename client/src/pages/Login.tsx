import React from 'react';
import Login from '../components/login/Login';
import { Background } from '../App.style';

export default function Home() {

  return (
    <Background>
      <div className="columns is-mobile">
        <div className="column is-4 is-offset-one-third">
          <Login/>
        </div>
      </div>
    </Background>
  );
}
