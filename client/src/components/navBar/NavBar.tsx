//#region Npm

import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { changePage } from '../../store/actions/route/route';
import { signOut } from '../../helpers/database/firebase/auth';
import { changeAuth } from '../../store/actions/auth/auth';

//#endregion

//#region Propriedades

type Props = {
    titulo: string,
    style?: any,
    styleTitulo?: any,
    admin?: boolean
}

//#endregion

export default function NavBar(props: Props) {
    const dispatch = useDispatch();

    const [redirect = '', redirectTo] = useState();

    const { titulo, style, styleTitulo, admin } = props;

    const removeNotifications = () => toast.dismiss();

    const onClick = () => {
        removeNotifications();
        // dispatch(changePage('login'))
    }

    const goTo = (path: string) => {
        signOut()
            .then(result => {
                dispatch(changeAuth(false));
                redirectTo(path);
            })
            .catch(err => console.log(err));
    }

    //#region XML

    return (
        <nav className="blue-grey darken-2" role="navigation" style={style ? style : {}}>
            <div className="nav-wrapper">

                {admin ? (
                    <ul id="nav-mobile" className="left">
                        <li><i className="large material-icons" style={{ userSelect: "none", cursor: "pointer" }} onClick={() => goTo('/')}>first_page</i></li>
                    </ul>
                )
                    : <Fragment />
                }

                {titulo ? <p className="brand-logo center" style={{ marginTop: "0%" }}>{titulo}</p> :
                    <Link onClick={onClick} className="brand-logo center" to="" style={styleTitulo ? styleTitulo : {}}>
                        <img style={{ width: "33%" }} src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo Steacher"></img>
                    </Link>}
            </div>

            {redirect ? <Redirect to={redirect} /> : <Fragment />}
        </nav>
    );

    //#endregion
};
