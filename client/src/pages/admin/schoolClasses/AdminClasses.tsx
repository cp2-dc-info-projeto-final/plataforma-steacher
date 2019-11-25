//#region Npm

import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router';
import NavBar from '../../../components/navBar/NavBar';
import { toast } from 'react-toastify';
import { getClasses, deleteClass, setClass } from '../../../helpers/database/mongodb/schoolClass';
import { getCourses } from '../../../helpers/database/mongodb/courses';

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Styles

import './class.css';
import { chatsMutation } from '../../../graphql/mutations/Mutation';
const { Collapsible, Select, option } = require('react-materialize');

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function AdminClasses(props: Props) {
    const [redirect = '', redirectTo] = useState();
    const [name = '', setName] = useState();
    const [courses = ([] as any[]), setCourses] = useState();
    const [selectedCourse = 0, selectCourse] = useState();
    const [classes = ([] as any[]), setClasses] = useState();

    useEffect(() => {
        getClasses()
            .then(results => {
                results.data.sort((a: any, b: any) => {
                    if (a.course.nome < b.course.nome) {
                        return -1;
                    }
                    if (a.course.nome > b.course.nome) {
                        return 1;
                    }
                    return 0;
                })

                console.log(results.data);

                setClasses(results.data);
            })
            .catch(err => console.log(err));
        getCourses()
            .then(results => {
                setCourses(results.data);
            })
            .catch(err => console.log(err));
    }, []);

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

    const addClass = () => {
        console.log(courses)
        if (!name) notifyError('Preencha o nome da turma.');
        else if (courses.length === 0) notifyError('Selecione um curso para a turma.');
        else {
            const course = courses[selectedCourse];

            setClass(name, course)
                .then(result => {
                    setClasses([...classes, result.data]);
                    
                    courses[selectedCourse].materias.forEach((materia: any) =>{
                        chatsMutation(materia, result.data._id, name)
                            .then(result => console.log(result.data))
                            .catch(err => console.log(err));
                    });
                })
                .catch(err => {
                    const error = err;

                    if (error.repetido) notifyError('Esta turma já foi cadastrada.');
                    else console.log(error)
                });
        }
    }

    const removeClass = (id: string) => {
        deleteClass(id)
            .then(() => setClasses(classes.filter((schoolClass: any) => schoolClass._id !== id)))
            .catch(err => console.log(err))
    }

    const onSelect = (event: any) => {
        const index = event.target.value;
        selectCourse(index);
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
                        <span className="flow-text">Cadastrar Turma:</span>
                        <input placeholder="Nome" id="materia" type="text" value={name} onChange={changeName} className="validate col s12" />
                        <div className="select-courses">
                            {/* <span className="flow-text" style={{ fontSize: "15pt" }}>Matérias do curso:</span> */}
                            <Select onChange={onSelect} style={{ padding: 0 }}>
                                {
                                    courses.length > 0 ? (
                                        courses.map((course: any, index: number) => {
                                            return (
                                                index === 0 ? (
                                                    <option selected value={index}>
                                                        {course.nome}
                                                    </option>
                                                )
                                                    : (
                                                        < option value={index} >
                                                            {course.nome}
                                                        </option>
                                                    )
                                            )
                                        })
                                    )
                                        : (
                                            < option value="" disabled >

                                            </option>
                                        )
                                }
                            </Select>
                            <button className="btn right" onClick={addClass} style={{ marginTop: "3%" }}>Cadastrar</button>
                        </div>
                    </div>

                    {
                        classes.length > 0 ? (
                            <ul className="collection with-header col s12" style={{ padding: 0 }}>
                                <li className="collection-header"><h4>Turmas:</h4></li>
                                {
                                    classes.map((schoolClass: any, index: number) => {
                                        return (
                                            <div key={index}>
                                                {/* <ul className="collection" style={{ margin: 0 }}> */}
                                                <Collapsible style={{margin: 0}}>
                                                    <li>
                                                        <div className="collapsible-header">
                                                            <i className="material-icons left" onClick={() => removeClass(schoolClass._id)} style={{ userSelect: "none", cursor: "pointer" }}>cancel</i>
                                                            {schoolClass.nome}
                                                            <span className="new badge" data-badge-caption={schoolClass.course.nome}></span>
                                                        </div>
                                                        <div className="collapsible-body">
                                                            <span className="flow-text" style={{padding: "2%"}}>Código de ativação: <span style={{color: "#00b0ff"}}>{schoolClass._id}</span></span>
                                                        </div>
                                                    </li>
                                                </Collapsible>
                                                {/* </ul> */}
                                            </div>
                                        )
                                    })
                                }

                            </ul>
                        )
                            : <Fragment />
                    }

                </div>
            </div>
        </div >
    );
}