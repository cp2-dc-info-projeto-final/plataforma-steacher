//#region Npm

import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

//#endregion

//#region Propriedades

type Props = {
    titulo: string,
    style?: any,
    styleTitulo?: any,
}

//#endregion

export default function NavBar(props: Props) {
    const { titulo, style, styleTitulo } = props;

    const removeNotifications = () => toast.dismiss();

    //#region XML

    return (
        <nav className="blue-grey darken-2" role="navigation" style={style ? style : {}}>
            <div className="nav-wrapper">
                {titulo ? <p className="brand-logo center" style={{ marginTop: "0%" }}>{titulo}</p> :
                    <Link onClick={removeNotifications} className="brand-logo center" to="/" style={styleTitulo ? styleTitulo : {}}>
                        <img style={{ width: "33%" }} src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo Steacher"></img>
                    </Link>}
            </div>
        </nav>
    );

    //#endregion
};
