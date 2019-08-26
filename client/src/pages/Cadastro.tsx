import React from 'react';

import CadastroComponent from '../components/home/cadastro/Cadastro';
import { Background } from '../App.style';

export default function Cadastro() {
  return (
    <Background>
      <div className="columns is-mobile">
        <div className="column is-4 is-offset-one-third">
          <CadastroComponent />
        </div>
      </div>
    </Background>
  );
}
