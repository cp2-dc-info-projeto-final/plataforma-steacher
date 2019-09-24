//#region Npm

import React from 'react';

//#endregion

//#region Functions



//#endregion

//#region Interfaces


//#endregion

//#region Components

import Form from '../form/FormCadastro';
import NavBar from '../../navBar/NavBar';

//#endregion

//#region Styles

//#endregion

//#region Propriedades

type Props = {
    form: string
}

//#endregion

export default function Card(props: Props) {
    const { form } = props;

    const pub = process.env.PUBLIC_URL;

    //#region XML

    return (
        <div className="container">
            <NavBar titulo="Cadastro" style={{marginTop: "8%", marginBottom: "-1%", borderRadius: "100% 100% 0% 0%"}} styleTitulo={{paddingBottom: "20%"}}/>
            <div className="card grey lighten-2">
                <Form />
            </div>
        </div>
    );

    //#endregion
}