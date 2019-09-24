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

const Options = () =>{

}

//#endregion

//#region Propriedades

type Props = {
    onChange: any,
    name: string,
    label: string[],
    value: string
}

//#endregion

export default function RadioButton(props: Props) {
    const { onChange, name, label, value } = props;

    //#region XML

    return (
            <form>
                <div className="col s2">
                    <p>
                        <label>
                            <input name={name} type="radio" value={value}/>
                            <span>{label[0]}</span>
                        </label>
                    </p>
                </div>
                <div className="col s2" style={{marginLeft:"20%"}}>
                    <p>
                        <label>
                            <input name={name} type="radio" value={value}/>
                            <span>{label[1]}</span>
                        </label>
                    </p>
                </div>
            </form>
    );

    //#endregion
}