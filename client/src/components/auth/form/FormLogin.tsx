//#region Npm

import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

//#endregion

//#region Actions

import { changeEmail, changePassword } from '../../../store/actions/auth/login';

//#endregion

//#region Functions

import { signIn } from '../../../helpers/database/firebase/auth';

//#endregion

//#region Interfaces

import { State } from '../../../models/Store';

//#endregion

//#region Components



//#endregion

//#region Styles



//#endregion

export default function Form() {

    const dispatch = useDispatch();

    //#region States

    const email = useSelector((state: State) => state.login.email);
    const password = useSelector((state: State) => state.login.password);

    //#endregion

    //#region OnChanges

    const onChangeEmail = (event: any): void => {
        dispatch(changeEmail(event.target.value));
        console.log(email)
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
        <div></div>
    );

    //#endregion
}
