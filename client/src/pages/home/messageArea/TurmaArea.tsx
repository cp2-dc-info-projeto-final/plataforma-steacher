//#region Npm

import React from 'react';

//#endregion

//#region Actions

import { useSelector, useDispatch } from 'react-redux';
import ChatBox from './chatBox/ChatBox';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Styles

import './TurmaArea.css';

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function TurmaArea(props: Props) {
    const dispatch = useDispatch();

    //#region States



    //#endregion

    //#region OnChanges



    //#endregion

    //#region OnClicks



    //#endregion

    //#region XML

    return (
        <div className="" style={{marginTop: "-2%"}}>
            <ul className="collection" style={{ marginBottom: 0, marginTop: 0 }}>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><span className="flow-text">IN303</span></div>
                        <div className="collapsible-body" style={{ padding: "0px" }}>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><span className="flow-text">IN303</span></div>
                        <div className="collapsible-body" style={{ padding: "0px" }}>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                            <ChatBox></ChatBox>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
    );

    //#endregion
}