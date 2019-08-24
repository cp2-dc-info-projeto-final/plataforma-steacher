import React from 'react';
import { Input, Button } from '../Login.styles';

export default function Form() {
    return (
        <form>
            <Input className="input is-rounded inputs" type="text" placeholder="E-mail" />
            <Input className="input is-rounded inputs" type="password" placeholder="Senha" />
            <Button className="button is-link is-rounded" type='submit'>Entrar</Button>
        </form>
    );
}
