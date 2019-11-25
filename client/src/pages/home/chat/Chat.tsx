//#region Npm

import React, { useRef } from 'react';

//#endregion

//#region Actions

import { useSelector, useDispatch } from 'react-redux';
import Message from './Message';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components

import Perfil from '../perfil/usuario/Perfil';

//#endregion

//#region Styles


//#endregion

//#region Propriedades

type Props = {
    id: string
}

//#endregion

export default function Chat(props: Props) {
    const column = useRef();

    const dispatch = useDispatch();

    const { id } = props;

    const goToBottom = () => {
        console.log(column);
        (column.current as any).scrollIntoView({ behavior: "smooth" })
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
            <Perfil id={id} direction="right" professor={false}></Perfil>

            <div style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>

                <div className="col s12" style={{ backgroundColor: "#363636" }}>
                    <a href="#" data-target={id} className="sidenav-trigger">
                        <img className="left" src={process.env.PUBLIC_URL + '/assets/morcego.jpg'} alt="" style={{ position: "relative", margin: "1% 1% 1% 1%", borderRadius: "50%", minWidth: "3rem", maxWidth: "4.5rem", width: "auto", userSelect: "none" }} />
                    </a>
                    <span className="left" style={{ display: "inline", position: "relative", marginTop: "2.5%", fontSize: "20px" }}>Nome da pessoa</span>
                    <i className="material-icons small" style={{ color: "lightgray", position: "absolute", right: "1rem", top: "1rem", cursor: "pointer", userSelect: "none" }}>close</i>
                </div>

                <div className="col s12" style={{ padding: 0, backgroundColor: "#1C1C1C", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <ul style={{ flex: 5, overflowY: "scroll", marginBottom: 0, marginTop: 0 }}>
                        <br />
                        <li><Message orientation='left'></Message></li>
                        <li><Message orientation='left'></Message></li>
                        <li><Message orientation='right'></Message></li>
                        <li ref={(column as any)}><Message orientation='left'></Message></li>
                    </ul>
                    <div className="col s12 grey lighten-3" style={{ flex: "1 2 -12%" }}>
                        <div className="row" style={{ margin: 0 }}>
                            <div className="input-field col s10" style={{ margin: 0, direction: "ltr" }}>
                                <input style={{ padding: 0, marginBottom: 0 }} placeholder="Digite uma mensagem..." type="text"></input>
                            </div>
                            <div className="col s2" style={{ margin: "0 0 0 0", padding: 0 }}>
                                <ul>
                                    <li style={{ display: "inline", listStyleType: "none", padding: "0 15% 0 -0" }}><i className="material-icons center-align" style={{ cursor: "pointer", userSelect: "none" }}>attach_file</i></li>
                                    <li style={{ display: "inline", listStyleType: "none" }}><i className="material-icons center-align" style={{ cursor: "pointer", userSelect: "none" }}>send</i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

    //#endregion
}