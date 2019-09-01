import React from 'react';
import { Input, Button } from '../../Home.styles';

export default function Form() {
  return (
    <form>
      <Input className="input is-rounded inputs" type="text" placeholder="Nome"></Input>
      <Input className="input is-rounded inputs" type="text" placeholder="Sobrenome"></Input>
      <Input className="input is-rounded inputs" type="text" placeholder="E-mail"></Input>
      <Input className="input is-rounded inputs" type="text" placeholder="Confirme seu e-mail"></Input>
      <Input className="input is-rounded inputs" type="text" placeholder="Senha"></Input>
      <Input className="input is-rounded inputs" type="text" placeholder="Confirme sua senha"></Input>
      <Input className="input is-rounded inputs" type="text" placeholder="Turma"></Input>
      <Button className="button is-link is-rounded" type='submit'>Enviar</Button>
    </form>
  );
}
