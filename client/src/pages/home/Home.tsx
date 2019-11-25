//#region Npm

import React, { useState, useEffect, Fragment } from 'react';
import Card from './card/Card';
import Loading from '../../components/loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../models/Store';
import { buscaDados } from '../../components/auth/form/buscaDados';
import { changeLoading } from '../../store/actions/loading/loading';

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
    const [card = false, setCard] = useState();
    const user = useSelector((state: State) => state.auth.user);

    useEffect(() => {
        buscaDados(user._id, user.userType)
            .then(result => {
                console.log(result);
                setCard(true);
                dispatch(changeLoading(false));
            })
            .catch(err => console.log(err));
    }, []);

    // //#region XML

    return (
        <div style={{ height: "100vh" }}>
            <Loading></Loading>
            {
               card ? <Card></Card> : <Fragment></Fragment>
            }
        </div>
    );

    //#endregion
}