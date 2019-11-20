//#region Npm

import React from 'react';
import News from './news/News';

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

export default function Mural(props: Props) {

    //#region XML

    return (
        <div style={{ backgroundColor: "#1C1C1C", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>

            {/* <nav style={{ backgroundColor: "#363636", flex: "2 2" }}>
                <div className="nav-wrapper">
                    <span className="brand-logo center" style={{ pointerEvents: "none", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", position: "relative" }}>Mural de Notícias</span>
                </div>
            </nav> */}

            <div className="row" style={{ margin: 0, flex: 1, overflowY: "auto" }}>
                <ul style={{ marginBottom: 0, marginTop: 0 }}>
                    <li><News></News></li>
                    <li><News></News></li>
                    <li><News></News></li>
                    <li><News></News></li>
                    <li><News></News></li>
                    <li><News></News></li>
                    <div className="divider"></div>
                    <li><News></News></li>
                    <li><News></News></li>
                    <li><News></News></li>
                    <li><News></News></li>
                </ul>
            </div>

        </div>
    );

    //#endregion
}