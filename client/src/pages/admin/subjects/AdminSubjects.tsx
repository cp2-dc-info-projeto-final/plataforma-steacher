//#region Npm

import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router';
import NavBar from '../../../components/navBar/NavBar';
import { setSubject, getSubjects, deleteSubject } from '../../../helpers/database/mongodb/subject';
import { toast } from 'react-toastify';

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

export default function AdminSubjects(props: Props) {
    const [redirect = '', redirectTo] = useState();
    const [name = '', setName] = useState();
    const [subjects = ([] as any[]), pushSubject] = useState();

    useEffect(() => {
        getSubjects()
            .then(results => pushSubject(results.data))
            .catch(err => console.log(err));
    }, [])

    toast.configure();

    const notifyError = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const changeName = (event: any) => {
        setName(event.target.value);
    }

    const goTo = (path: string) => {
        redirectTo(path);
    };

    const addSubject = () => {
        setSubject(name)
            .then(result => pushSubject([...subjects, result.data]))
            .catch(err => {
                const error = err.response.data;

                if (error.repetido) notifyError('Esta matéria já foi cadastrada.');
                else console.log(error)
            });
    }

    const removeSubject = (id: string) => {
        deleteSubject(id)
            .then(() => pushSubject(subjects.filter(subject => subject._id !== id)))
            .catch(err => console.log(err))
    }

    //#region XML

    return (
        <div className="row" style={{ height: "100%" }}>

            {
                redirect ? <Redirect to={redirect} /> : <Fragment />
            }

            <NavBar titulo="" admin={true}></NavBar>

            <div className="offset-s3 col s6" style={{ boxShadow: "-2px 2px 5px 1px rgba(0,0,0,0.52)", borderRadius: "1%", marginTop: "5%", backgroundColor: "#fafafa" }}>
                <i className="material-icons small col" onClick={() => goTo('/admin')} style={{ margin: "3% 0 2% 0", userSelect: "none", cursor: "pointer" }}>arrow_back</i>
                <div className="col s12">
                    <div className="input-field col s12">
                        <span className="flow-text">Cadastrar matéria:</span>
                        <input placeholder="Nome" id="materia" type="text" value={name} onChange={changeName} className="validate col s11" />
                        <i className="material-icons small col s1" onClick={addSubject} style={{ marginTop: "2%", userSelect: "none", cursor: "pointer" }}>add_circle_outline</i>
                    </div>

                    {
                        subjects.length > 0 ? (
                            <ul className="collection with-header col s12" style={{ padding: 0 }}>
                                <li className="collection-header"><h4>Matérias:</h4></li>
                                {
                                    subjects.map((subject: any, index: number) => {
                                        return <li key={index} className="collection-item"><div>{subject.nome}<a href="#!" className="secondary-content"><i className="material-icons" onClick={() => removeSubject(subject._id)}>cancel</i></a></div></li>
                                    })
                                }
                            </ul>
                        )
                            : <Fragment />

                    }

                </div>
            </div>
        </div>
    );
}