//#region Npm

import React from 'react';

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



//#endregion

//#region Propriedades

type Props = {
    orientation: string,
}

//#endregion

export default function Message(props: Props) {
    const dispatch = useDispatch();

    const { orientation } = props;

    const cardStyle = () => {
        let style: any = {};

        (orientation == 'left') ? (
            style = {
                maxHeight: "50%",
                marginLeft: "4%",
                borderRadius: "12px",
                borderBottomLeftRadius: "0",
                maxWidth: "30ch",
                textOverflow: "ellipsis",
                overflow: "hidden",
                direction: "ltr",
                padding: " 1% 2% 0 2%"
            }
        )
            : (
                style = {
                    maxHeight: "50%",
                    marginRight: "4%",
                    borderRadius: "12px",
                    borderBottomRightRadius: "0",
                    maxWidth: "30ch",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    direction: "rtl",
                    padding: " 1% 2% 0 2%"
                }
            )

        return style;
    }

    //#region States



    //#endregion

    //#region OnChanges



    //#endregion

    //#region OnClicks



    //#endregion

    //#region XML

    return (
        <div className="row" style={{marginRight: 0}}>
            <div className={`card-horizontal grey lighten-5 z-depth-1 ${orientation}`} style={cardStyle()}>
                <div className="row valign-wrapper">
                    <div className="col s12">
                        <span className="blue-text" style={{fontStyle: "italic", cursor: "pointer", userSelect: "none"}}>Daniel</span>
                        <br/>
                        <span className="black-text" style={{ wordBreak: "break-all" }}>
                            This is a square image. Addasdasdasdsasdsadasdasdasdsadssadasd the "circle" class to it to make it appear circular.dasdasdasdsad
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    //#endregion
}