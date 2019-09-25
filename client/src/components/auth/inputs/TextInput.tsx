//#region Npm

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titulo: {
            marginBottom: "0%"
        }
    }),
);

export default function Input(props: Props) {
    const { onChange, style , id , type , label ,value } = props;

    const classes = useStyles();

    //#region XML

    return (
        <div>
            <input id={id} type={type} value={value} className="validate" onChange={onChange} style={style} placeholder={label}/>
            <label htmlFor={id} className="titulo" style={style}>{label}</label>
        </div>
    );

    //#endregion
}