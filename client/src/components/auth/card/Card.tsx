//#region Npm

import React from 'react';

//#endregion

//#region Components

import FormCadastro from '../form/FormCadastro';
import NavBar from '../../navBar/NavBar';
import FormLogin from '../form/FormLogin';

//#endregion

//#region Propriedades

type Props = {
    form: string
}

//#endregion

export default function Card(props: Props) {
    const { form } = props;

    //#region XML

    return (
        <div className="container" style={(form === 'cadastro') ? {} : { width: "50%", marginTop: "13%" }}>
            <NavBar titulo={(form === 'cadastro') ? 'Cadastro' : 'Login'} style={{ marginTop: "8%", marginBottom: "0%", borderRadius: "100% 100% 0% 0%" }} styleTitulo={{ paddingBottom: "20%" }} />
            <div className="card grey lighten-2  hoverable" style={{ marginTop: "0%", borderTopLeftRadius: "0%", borderTopRightRadius: "0%" }}>
                {(form === 'cadastro') ? <FormCadastro /> : <FormLogin />}
            </div>
        </div>
    );

    //#endregion
}