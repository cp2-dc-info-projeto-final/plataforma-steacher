//#region Npm

import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

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

export default function Home(props: Props) {

    //#region XML

    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <div className="col offset-s3 s6 center">
                        <img src={process.env.PUBLIC_URL + '/assets/RIP.png'} />
                        <h1 style={{ textAlign: "center", marginBottom:"-1%" }}>R.I.P Brownie</h1>
                    </div>
                </div>
            </div>
        </div>
    );

    //#endregion
}