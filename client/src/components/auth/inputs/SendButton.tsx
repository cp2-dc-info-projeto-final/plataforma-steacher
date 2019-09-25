//#region Npm

import React from 'react';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion


//#region Propriedades

type Props = {
    onClick?: any,
    label: string,
    width: string
}

//#endregion

export default function SendButton(props: Props) {
    const { onClick ,label, width } = props;

    //#region XML

    return (
        <button onClick={onClick} className="btn blue-grey darken-2 waves-effect waves-light" type="submit" name="action" style={{ width: width }}>
            {label}
        </button>
    );

    //#endregion
}