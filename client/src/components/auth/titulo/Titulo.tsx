//#region Npm

import React from 'react';

//#endregion

//#region Material-ui


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
    text: string
}

//#endregion

export default function Titulo(props: Props) {
    const { text } = props;

    //#region XML

    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className={`header center white-text`} style={{boxShadow: "7px 10px 5px -5px rgba(0,0,0,0.75)"}}>{text}</h1>
            </div>
        </div>
    );

    //#endregion
}