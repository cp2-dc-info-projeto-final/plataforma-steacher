//#region Npm

import React from 'react';
import { useSelector } from 'react-redux';

//#endregion

//#region Interfaces

import { State } from '../../models/Store';

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function Loading(props: Props) {
    //#region States

    const loading = useSelector((state: State) => state.loadingScreen.loading);

    //#endregion

    //#region Render Function

    const renderLoading = () => {
        if (loading) {
            return (
                <div style={{ width: '100%', height: '100%', top: '0px', left: '0px', position: 'fixed', display: 'block', zIndex: 99, backgroundColor: 'rgba(11,11,11,0.2)' }}>
                    <div style={{ top: '40%', position: 'absolute', margin: 0, left: '48%' }}>
                        <div className="center">
                            <div className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-blue-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <></>
        }
    }

    //#endregion

    //#region XML

    return (
        <div>
            {renderLoading()}
        </div>
    );

    //#endregion
}