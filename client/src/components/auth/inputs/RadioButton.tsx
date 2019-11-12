//#region Npm

import React from 'react';

//#endregion

//#region Actions



//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Propriedades

type Props = {
    onChange: any,
    name: string,
    labels: string[]
}

//#endregion

export default function RadioButton(props: Props) {
    const { onChange, name, labels } = props;

    const changeValue = (index: number) => {
        onChange(labels[index]);
    }

    //#region XML

    return (
        <form>
            {labels.map((label: string, index: number) => {
                let margin = '5%';

                if (label !== labels[0]) {
                    margin = '20%';
                }

                return (<div className="col s2" style={{ marginLeft: margin }} >
                    <p>
                        <label>
                            <input name={name} type="radio" onChange={() => changeValue(index)} />
                            <span>{label}</span>
                        </label>
                    </p>
                </div>
                )
            })}
        </form>
    );

    //#endregion
}