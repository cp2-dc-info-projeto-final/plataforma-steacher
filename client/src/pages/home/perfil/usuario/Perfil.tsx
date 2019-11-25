//#region Npm

import React, { useEffect, useState } from 'react';

//#endregion

//#region Actions

import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../../../components/navBar/NavBar';
import { State } from '../../../../models/Store';
import { getUser } from '../../../../helpers/database/mongodb/user';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Styles

const { SideNav, SideNavItem } = require('react-materialize');

//#endregion

//#region Propriedades

type Props = {
    direction: 'left' | 'right',
    id: string,
    professor: boolean
}

//#endregion

export default function Perfil(props: Props) {
    const dispatch = useDispatch();

    const { id, direction, professor } = props;

    const getUserType = () => professor ? 'Professor ' : '';

    //#region States

    const user = useSelector((state: State) => state.auth.user);
    const [destiny = ('' as any), setDestiny] = useState();

    useEffect(() => {
        if (direction === 'right') {
            getUser(id)
                .then(user => setDestiny(user.data))
                .catch(err => console.log(err))
        }
    })


    //#endregion

    //#region OnChanges



    //#endregion

    //#region OnClicks



    //#endregion

    //#region XML

    return (
        // <div>
        //     <ul id={id} className={`sidenav ${direction}nav`} style={{ width: "30%" }}>
        //         <li>
        //             <img src={process.env.PUBLIC_URL + '/assets/morcego.jpg'} alt="" style={{ width: "100%", height: "20rem", userSelect: "none" }} />
        //             {
        //                 (direction == 'left') ? <i className="material-icons small" style={{ userSelect: "none", cursor: "pointer", position: "absolute", top: "0.2em", right: "0.2em" }}>edit</i>
        //                     : <></>
        //             }
        //         </li>
        //         <div className="flow-text" style={{ textAlign: "center", fontFamily: 'Palatino Linotype Bold' }}>
        //             <li><h3 style={{ marginTop: "0" }}>{getUserType()}Marcio</h3></li>
        //             <li><div className="divider"></div></li>
        //             {
        //                 professor ? (
        //                     <div>
        //                         <li><h4>Matérias:</h4></li>
        //                         <li><h6>Matematica</h6></li>
        //                         <li><div className="divider"></div></li>
        //                         <li><h4>Turmas:</h4></li>
        //                         <li><h6>In303</h6></li>
        //                     </div>
        //                 ) : (
        //                         <div>
        //                             <li><h4>Turma:</h4></li>
        //                             <li><h6>In303</h6></li>
        //                             <li><div className="divider"></div></li>
        //                             <li><h4>Turno:</h4></li>
        //                             <li><h6>Manhã</h6></li>
        //                         </div>
        //                     )


        //             }
        //             <li><div className="divider"></div></li>
        //             <li><h4>Contato:</h4></li>
        //             <li><h6>ddasdasdas@dasdsa.com</h6></li>
        //         </div>
        // </ul>
        // </div>
        <div>
            <SideNav id={id} trigger={<></>} options={{ closeOnClick: true, edge: direction }} style={{ width: "30%" }}>
                <li>
                    <img src={process.env.PUBLIC_URL + '/assets/morcego.jpg'} alt="" style={{ width: "100%", height: "20rem", userSelect: "none" }} />
                    {
                        (direction == 'left') ? <i className="material-icons small" style={{ userSelect: "none", cursor: "pointer", position: "absolute", top: "0.2em", right: "0.2em" }}>edit</i>
                            : <></>
                    }
                </li>
                <div className="flow-text" style={{ textAlign: "center", fontFamily: 'Palatino Linotype Bold' }}>
                    <li><h3 style={{ marginTop: "0" }}>{getUserType()}Marcio</h3></li>
                    <li><div className="divider"></div></li>
                    {
                        professor ? (
                            <div>
                                <li><h4>Matérias:</h4></li>
                                {destiny}
                                <li><h6>Matematica</h6></li>
                                <li><div className="divider"></div></li>
                                <li><h4>Turmas:</h4></li>
                                <li><h6>In303</h6></li>
                            </div>
                        ) : (
                                <div>
                                    <li><h4>Turma:</h4></li>
                                    <li><h6>{user.turmaAtual}</h6></li>
                                </div>
                            )


                    }
                    <li><div className="divider"></div></li>
                    <li><h4>Contato:</h4></li>
                    <li><h6>ddasdasdas@dasdsa.com</h6></li>
                </div>
            </SideNav >
        </div >
    );

    //#endregion
}