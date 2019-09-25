//#region Npm

import React from 'react';
import { Link } from 'react-router-dom';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion


//#region Propriedades

type Props = {
    link: string,
    label: string,
    width: string
}

//#endregion

export default function LinkButton(props: Props) {
    const { link ,label, width } = props;

    //#region XML

    return (
        <Link to={link}>
            <button className="btn blue-grey darken-2 waves-effect waves-light" type="submit" name="action" style={{ width: width }}>
                {label}
            </button>
        </Link>
    );

    //#endregion
}