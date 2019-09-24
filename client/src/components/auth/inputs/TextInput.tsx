//#region Npm

import React from 'react';

//#endregion

//#region Actions



//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Propriedades

type Props = {
    onChange?: any,
    style?: any,
    id: string,
    type: string,
    label: string,
    value?: string 
}

//#endregion

export default function Input(props: Props) {
    const { onChange, style , id , type , label ,value } = props;

    //#region XML

    return (
        <div>
            <input id={id} type={type} value={value} className="validate" onChange={onChange} style={style} placeholder={label}/>
            <label htmlFor={id} style={style}>{label}</label>
        </div>
    );

    //#endregion
}