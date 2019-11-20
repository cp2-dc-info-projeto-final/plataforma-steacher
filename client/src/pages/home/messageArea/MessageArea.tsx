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



//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function MessageArea(props: Props) {
    const dispatch = useDispatch();

    //#region States



    //#endregion

    //#region OnChanges



    //#endregion

    //#region OnClicks



    //#endregion

    //#region XML

    return (
        <div className="grey lighten-2">
            <ul className="collection" style={{ marginBottom: 0, marginTop: 0 }}>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
                <ChatBox></ChatBox>
            </ul>

        </div>
    );

    //#endregion
}