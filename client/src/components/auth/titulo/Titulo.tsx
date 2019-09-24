//#region Npm

import React from 'react';

//#endregion

//#region Material-ui

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Styles

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titulo: {
            boxShadow: "7px 10px 5px -5px rgba(0,0,0,0.75)"
        }
    }),
);

//#endregion

//#region Propriedades

type Props = {
    text: string
}

//#endregion

export default function Titulo(props: Props) {
    const classes = useStyles();

    const { text } = props;

    //#region XML

    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className={`header center white-text ${classes.titulo}`}>{text}</h1>
            </div>
        </div>
    );

    //#endregion
}