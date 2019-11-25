//#region Npm

import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router';
import NavBar from '../../../components/navBar/NavBar';
import { toast } from 'react-toastify';
import { getCourses, setCourse, putCourse, deleteCourse } from '../../../helpers/database/mongodb/courses';
import { getSubjects } from '../../../helpers/database/mongodb/subject';


//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components



//#endregion

//#region Styles

const { Collapsible } = require('react-materialize');

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function AdminCourses(props: Props) {
    const [redirect = '', redirectTo] = useState();
    const [name = '', setName] = useState();
    const [materias = ([] as string[]), setMaterias] = useState();
    const [courses = ([] as any[]), setCourses] = useState();
    const [options = ([] as any[]), setOptions] = useState();;

    useEffect(() => {
        getCourses()
            .then(results => setCourses(results.data))
            .catch(err => console.log(err));
        getSubjects()
            .then(results => setOptions(results.data.map((materia: any) => {
                return {
                    nome: materia.nome,
                    valor: false
                }
            })))
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

    const addCourse = () => {
        if (!name) notifyError('Preencha o nome do curso.');
        else {
            let erro = true;

            options.forEach((option: any) => {
                if (option.valor) erro = false;
            });

            if (erro) notifyError('Preencha as matérias do curso.');
            else {
                let materias = options.map(option => {
                    if (option.valor) return option.nome;
                });

                materias = materias.filter(materia => materia);

                setCourse(name, materias)
                    .then(result => setCourses([...courses, result.data]))
                    .catch(err => {
                        const error = err.response.data;

                        if (error.repetido) notifyError('Este curso já foi cadastrado.');
                        else console.log(error)
                    });
            }
        }
    }

    const updateCourse = (id: string, materia: string, index: number) => {
        putCourse(id, materia)
            .then(result => {
                console.log(courses[index])

                // setCourses(courses)
            })
    }

    const removeCourse = (id: string) => {
        deleteCourse(id)
            .then(() => setCourses(courses.filter(course => course._id !== id)))
            .catch(err => console.log(err))
    }

    const onSelect = (index: number) => {
        let option = options[index];
        option.valor = !option.valor;
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
                        <span className="flow-text">Cadastrar Curso:</span>
                        <input placeholder="Nome" id="materia" type="text" value={name} onChange={changeName} className="validate col s12" />
                        <div className="col s12" style={{ padding: 0 }}>
                            <span className="flow-text" style={{ fontSize: "15pt" }}>Matérias do curso:</span>
                            <div className="col s12" style={{ boxShadow: "-1px -1px 21px -12px rgba(0,0,0,0.75)", marginTop: "1%" }}>
                                {
                                    options.map((option: any, index: number) => {
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
                        <button className="btn right" onClick={addCourse} style={{ marginTop: "2%" }}>Cadastrar</button>
                    </div>

                    {
                        courses.length > 0 ? (
                            <ul className="collection with-header col s12" style={{ padding: 0 }}>
                                <li className="collection-header"><h4>Cursos:</h4></li>
                                {
                                    courses.map((course: any, index: number) => {
                                        console.log(course);
                                        return (
                                            <div key={index}>
                                                <Collapsible style={{ margin: 0 }}>
                                                    <li>
                                                        <div className="collapsible-header"><i className="material-icons" onClick={() => removeCourse(course._id)}>cancel</i>{course.nome}</div>
                                                        <div className="collapsible-body">
                                                            {
                                                                course.materias.map((materia: string, index: number) => <li key={index} className="collection-item"><div>{materia}<a href="#!" className="secondary-content"></a></div></li>)
                                                            }
                                                        </div>
                                                    </li>
                                                </Collapsible>
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
        </div>
    );
}