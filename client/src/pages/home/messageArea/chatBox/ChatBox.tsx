//#region Npm

import React, { Fragment } from 'react';

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

import './ChatBox.css'

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function ChatBox(props: Props) {
    const dispatch = useDispatch();

    //#region States



    //#endregion

    //#region OnChanges



    //#endregion

    //#region OnClicks



    //#endregion

    //#region XML

    return (
        <li className="collection-item avatar">
            <i className="material-icons circle red">play_arrow</i>
            <span className="title">Title</span>
            <p>First Line</p>
            <p style={{ fontSize: "10pt" }}>Second Line</p>
            <a href="#!" className="secondary-content"><span className="new badge red" data-badge-caption="mensagens">4</span></a>
        </li>

    );

    //#endregion
}