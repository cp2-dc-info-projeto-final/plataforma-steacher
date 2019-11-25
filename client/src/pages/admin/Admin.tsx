//#region Npm

import React, { useState, Fragment } from 'react';
import NavBar from '../../components/navBar/NavBar';
import { Redirect } from 'react-router-dom';

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

export default function Admin(props: Props) {
    const [redirect = '', redirectTo] = useState();

    const goTo = (path: string) => {
        redirectTo(path);
    };

    //#region XML

    return (
        <div className="row" style={{ height: "100%" }}>
            
            {
                redirect ? <Redirect to={redirect} /> : <Fragment />
            }

            <NavBar titulo="" admin={true}></NavBar>

            <div className="offset-s3 col s6" style={{ boxShadow: "-2px 2px 5px 1px rgba(0,0,0,0.52)", borderRadius: "1%", marginTop: "8%", backgroundColor: "#fafafa" }}>
                <ul className="offset-s1 col s10" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <li style={{ marginBottom: "5%" }}>
                        <button className="btn" onClick={() => goTo('admin/courses')}>Cadastrar Cursos</button>
                    </li>
                    <li style={{ marginBottom: "5%" }}>
                        <button className="btn" onClick={() => goTo('admin/classes')}>Cadastrar Turmas</button>
                    </li>
                    <li style={{ marginBottom: "5%" }}>
                        <button className="btn" onClick={() => goTo('admin/subjects')}>Cadastrar Matérias</button>
                    </li>
                    <li>
                        <button className="btn" onClick={() => goTo('admin/teachers')}>Cadastrar Professores</button>
                    </li>
                </ul>

            </div>
        </div>
    );

    //#endregion
}