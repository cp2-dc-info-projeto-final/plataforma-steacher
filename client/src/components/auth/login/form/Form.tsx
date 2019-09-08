//#region Npm

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

//#endregion

//#region Actions

import { changeEmail, changePassword } from '../../../../store/actions/auth/login';

//#endregion

//#region Functions

import { signIn } from '../../../../helpers/database/firebase/auth';

//#endregion

//#region Interfaces

import { State } from '../../../../models/Store';

//#endregion

//#region Styles

import { Input, Button } from '../../Home.styles';

//#endregion

export default function Form() {
    const dispatch = useDispatch();

    //#region States

    const email = useSelector((state: State) => state.email);
    const password = useSelector((state: State) => state.password);

    //#endregion

    //#region OnChanges

    const onChangeEmail = (event: any): void => {
        dispatch(changeEmail(event.target.value));
    }

    const onChangePassword = (event: any): void => {
        dispatch(changePassword(event.target.value));
    }

    //#endregion

    //#region OnClicks

    const onClickLogin = (event: any): void => {
        event.preventDefault();
        signIn(email, password)
            .then(result => console.log(result))
            .catch(error => console.log(error.response.data))
    }

    //#endregion

    //#region XML

    return (
        <form>
            <Input className="input is-rounded inputs" type="text" placeholder="E-mail" name="name" value={email} onChange={onChangeEmail} />
            <Input className="input is-rounded inputs" type="password" placeholder="Senha" name="senha" value={password} onChange={onChangePassword} />
            <Button className="button is-link is-rounded" type='submit' onClick={onClickLogin}>Entrar</Button>
        </form>
    );

    //#endregion
}
