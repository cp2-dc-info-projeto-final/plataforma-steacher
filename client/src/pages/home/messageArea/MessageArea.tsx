//#region Npm

import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
// import ScrollArea from 'react-scrollbar';
// import 'react-scrollbar/dist/no-css'
// import PerfectScrollbar from 'react-perfect-scrollbar'
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import { Scrollbar } from 'react-scrollbars-custom';


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