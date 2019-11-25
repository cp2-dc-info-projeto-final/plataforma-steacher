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
import { State } from '../../../models/Store';
const { Collapsible, CollapsibleItem } = require('react-materialize');

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function TurmaArea(props: Props) {
    const dispatch = useDispatch();

    //#region States

    const classes = useSelector((state: State) => state.chats.classes);
    console.log(classes)

    //#endregion

    //#region OnChanges



    //#endregion

    //#region OnClicks



    //#endregion

    //#region XML

    return (
        <div className="" style={{ marginTop: "-2%" }}>
            <ul className="collection" style={{ marginBottom: 0, marginTop: 0 }}>
                <Collapsible>
                    <li>
                        <div className="collapsible-header"><span className="flow-text">IN303</span></div>
                        <div className="collapsible-body" style={{ padding: "0px" }}>
                            <ul>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><span className="flow-text">IN303</span></div>
                        <div className="collapsible-body" style={{ padding: "0px" }}>
                            <ul>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                                <ChatBox></ChatBox>
                            </ul>
                        </div>
                    </li>
                </Collapsible>
            </ul>
        </div>
    );

    //#endregion
}