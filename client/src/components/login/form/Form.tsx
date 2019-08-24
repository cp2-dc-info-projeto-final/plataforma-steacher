import React from 'react';
import { Input, Button } from '../Login.styles';

export default function Form() {
    return (
        <form>
            <Input className="input is-rounded inputs" type="text" placeholder="Login" />
            <Input className="input is-rounded inputs" type="password" placeholder="Senha" />
            <Button className="button is-info is-rounded" type='submit'>Enviar</Button>
        </form>
    );
}
