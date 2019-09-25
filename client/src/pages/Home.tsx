//#region Npm

import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import { signOut } from '../helpers/database/firebase/auth';
import { Redirect } from 'react-router';
import { changeRedirect } from '../store/actions/auth/common';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../models/Store';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function Home(props: Props) {
    const dispatch = useDispatch();

    const redirect = useSelector((state: State) => state.auth.redirect);

    const onChangeRedirect = (value: boolean): void => {
        dispatch(changeRedirect(value));
    }

    const onClickImage = (event: any) =>{
        signOut()
            .then(result =>{
                console.log(result);
                onChangeRedirect(true);
            })
            .catch(error => console.log(error));
    }

    //#region XML

    return (
        <div>
            {redirect ? <Redirect to="/"/> : <></> }
            <div className="row">
                <div className="col s12">
                    <div className="col offset-s3 s6 center">
                        <a href="http://localhost:3000/"><img src={process.env.PUBLIC_URL + '/assets/RIP.png'} /></a>
                        <h1 style={{ textAlign: "center", marginBottom:"-1%" }}>R.I.P Brownie</h1>
                    </div>
                </div>
            </div>
        </div>
    );

    //#endregion
}