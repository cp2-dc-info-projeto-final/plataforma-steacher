//#region Npm

import React from 'react';
import { Link } from 'react-router-dom';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Propriedades

type Props = {
    titulo: string,
    style?: any;
    styleTitulo?: any
}

//#endregion

export default function NavBar(props: Props) {
    const { titulo, style, styleTitulo } = props;

    //#region XML

    return (
        <nav className="blue-grey darken-2" role="navigation" style={style ? style : {}}>
            <div className="nav-wrapper">
                <Link className="brand-logo center" to={'/'} style={styleTitulo ? styleTitulo : {}}>{titulo}</Link>
            </div>
        </nav>
    );

    //#endregion
};
