//#region Npm

import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router';
import NavBar from '../../../components/navBar/NavBar';
import { setSubject, getSubjects, deleteSubject } from '../../../helpers/database/mongodb/subject';
import { toast } from 'react-toastify';
import { findTeachers } from '../../../helpers/database/mongodb/teachers';
import { signUp } from '../../../helpers/database/firebase/auth';

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

export default function AdminTeachers(props: Props) {
    const [redirect = '', redirectTo] = useState();

    const [name = '', setName] = useState();
    const [subName = '', setSubName] = useState();
    const [email = '', setEmail] = useState();
    const [confirmEmail = '', setConfirmEmail] = useState();
    const [register = '', setRegister] = useState();
    const [subject = ([] as any[]), setSubject] = useState();

    const [subjects = ([] as any[]), setSubjects] = useState();
    const [teachers = ([] as any[]), setTeachers] = useState();

    useEffect(() => {
        findTeachers()
            .then(results => setTeachers(results.data))
            .catch(err => console.log(err));
        getSubjects()
            .then(results => setSubjects(results.data.map((materia: any) => {
                return {
                    nome: materia.nome,
                    valor: false
                }
            })))
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

    const addTeacher = () => {
        let materias = subjects.map(option => {
            if (option.valor) return option.nome;
        });

        materias = materias.filter(materia => materia);

        const data = {
            name: name,
            subName: subName,
            email: email,
            emailConfirm: confirmEmail,
            password: register,
            passwordConfirm: register,
            registration: register,
            type: 'professor',
            materias: materias
        }

        signUp(data)
            .then(result => setTeachers([...teachers, result.data]))
            .catch(err => {
                console.log(err.response.data);
                notifyError(err.response.data)
            });
    }

    const onSelect = (index: number) => {
        let option = subjects[index];
        option.valor = !option.valor;
    }

    // const removeSubject = (id: string) => {
    //     deleteSubject(id)
    //         .then(() => pushSubject(subjects.filter(subject => subject._id !== id)))
    //         .catch(err => console.log(err))
    // }

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
                        <span className="flow-text">Cadastrar Professor:</span>
                        <input placeholder="Nome" type="text" value={name} onChange={(event: any) => setName(event.target.value)} className="validate col s12" />
                        <input placeholder="Sobrenome" type="text" value={subName} onChange={(event: any) => setSubName(event.target.value)} className="validate col s12" />
                        <input placeholder="E-mail" type="text" value={email} onChange={(event: any) => setEmail(event.target.value)} className="validate col s12" />
                        <input placeholder="Confirmação de e-mail" type="text" value={confirmEmail} onChange={(event: any) => setConfirmEmail(event.target.value)} className="validate col s12" />
                        <input placeholder="Matricula" type="text" value={register} onChange={(event: any) => setRegister(event.target.value)} className="validate col s12" />
                        <div className="col s12" style={{ padding: 0 }}>
                            <span className="flow-text" style={{ fontSize: "15pt" }}>Matérias do curso:</span>
                            <div className="col s12" style={{ boxShadow: "-1px -1px 21px -12px rgba(0,0,0,0.75)", marginTop: "1%" }}>
                                {
                                    subjects.map((option: any, index: number) => {
                                        return (
                                            <div className="col s6" key={index}>
                                                <p>
                                                    <label>
                                                        <input type="checkbox" onClick={() => onSelect(index)} />
                                                        <span>{option.nome}</span>
                                                    </label>
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button className="btn right" onClick={addTeacher} style={{ marginTop: "2%" }}>Cadastrar</button>
                    </div>

                    {/* {
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

                    } */}

                </div>
            </div>
        </div>
    );
}