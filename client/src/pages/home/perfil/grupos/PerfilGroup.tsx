//#region Npm

import React from 'react';

//#endregion

//#region Actions

import { useSelector, useDispatch } from 'react-redux';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Styles



//#endregion

//#region Propriedades

type Props = {
    id: string,
    turma: boolean
}

//#endregion

export default function PerfilGrupos(props: Props) {
    const dispatch = useDispatch();

    const { id, turma} = props;

    const getGroupType = () => {
        return turma ? 'Turma' : ''
    }

    //#region States



    //#endregion

    //#region OnChanges



    //#endregion

    //#region OnClicks



    //#endregion

    //#region XML

    return (
        <div>
            <ul id={id} className={`sidenav rightnav`} style={{ width: "30%" }}>
                <li><img src={process.env.PUBLIC_URL + '/assets/morcego.jpg'} alt="" style={{ width: "100%", height: "20rem", userSelect: "none" }} /></li>
                <div className="flow-text">
                    <li><h3 style={{ marginTop: "0", textAlign: "center" }}>{getGroupType()} IN303</h3></li>
                    <li><div className="divider"></div></li>
                    <li><h4 style={{ textAlign: "left" }}>Participantes:</h4></li>
                    <li><h6>Matematica</h6></li>
                </div>
            </ul>
        </div>
    );

    //#endregion
}