//#region Npm

import React, { useState, Fragment } from 'react';
import './Card.css';

// import reactWebTabs from 'react-web-tabs';

// const Tab = reactWebTabs.Tab;
// const Tabs = reactWebTabs.Tabs;
// const TabPanel = reactWebTabs.TabPanel;
// const TabList = reactWebTabs.TabList;

//#endregion

//#region Functions



//#endregion

//#region Interfaces



//#endregion

//#region Components

import MessageArea from '../messageArea/MessageArea';
import Chat from '../chat/Chat';
import Perfil from '../perfil/usuario/Perfil';
import Mural from '../mural/Mural';
import TurmaArea from '../messageArea/TurmaArea';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../models/Store';
import { changeLoading } from '../../../store/actions/loading/loading';
import { signOut } from '../../../helpers/database/firebase/auth';
import { changeAuth } from '../../../store/actions/auth/auth';
import { Redirect } from 'react-router';
import { groupMutation } from '../../../graphql/mutations/Mutation';
import { setClasses } from '../../../store/actions/chats/chats';


//#endregion

const { Tabs, Tab, Modal, Button } = require('react-materialize');

//#region Propriedades

type Props = {

}

//#endregion

export default function Card(props: Props) {
    const dispatch = useDispatch();

    const [redirect = '', redirectTo] = useState();
    const [codigo = '', setCodigo] = useState();

    const user = useSelector((state: State) => state.auth.user);

    const chat = true;

    const goTo = () => {
        console.log(123)
        signOut()
            .then(result => {
                dispatch(changeAuth(false));
                redirectTo('/');
            })
            .catch(err => console.log(err));
    }

    const addChat = (event: any) => {
        dispatch(changeLoading(true))

        groupMutation(user._id, codigo, user.userType)
            .then(result =>{
                dispatch(changeLoading(false))
                dispatch(setClasses(result.data));
            })
            .catch(err =>{
                dispatch(changeLoading(false))  
                console.log(err)
            })

    }

    //#region XML

    return (
        <div className="row" style={{ margin: 0, height: "100%" }}>
            {redirect ? <Redirect to={redirect} /> : <Fragment />}

            <Perfil id="user" direction="left" professor={false}></Perfil>

            <div className="col s4" style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div className="row" style={{ marginBottom: 0, flex: "1 3" }}>
                    <div className="col s12 grey lighten-4" style={{ paddingRight: "0%" }}>
                        <a href="#" data-target="user" className="sidenav-trigger">
                            <img src={process.env.PUBLIC_URL + '/assets/morcego.jpg'} alt="" style={{ borderRadius: "50%", margin: "2% 0% 0% 0%", minWidth: "3rem", maxWidth: "4.5rem", width: "auto", userSelect: "none" }} />
                        </a>

                        <Modal header="Insira o código de uma turma ou grupo:" id="modal1" actions={<Button className="btn right" modal="close" onClick={addChat}>Adicionar</Button>}>
                            <div className="input-field col s4">
                                <input placeholder="Código" value={codigo} onChange={(event: any) => setCodigo(event.target.value)} type="text" className="validate" />
                            </div>
                        </Modal>


                        <a className="modal-trigger" href="#modal1" style={{ color: "inherit" }}><i className="material-icons right" style={{ fontSize: "33pt", userSelect: "none", cursor: "pointer", marginTop: "2%" }}>queue</i></a>
                        <i className="material-icons right" onClick={goTo} style={{ fontSize: "33pt", userSelect: "none", cursor: "pointer", marginTop: "2%" }}>first_page</i>
                    </div>

                    <div className="col s12 tabsDiv" style={{ padding: "0%", height: "35%" }}>
                        {/* <div style={{ width: "100%", overflow: "hidden", display: "flex", flexDirection: "row" }}> */}
                        <div className="row" style={{ height: "100vh", flex: 10, overflowY: "scroll", marginBottom: 0 }}>
                            <Tabs className="col s12 no-padding">
                                <Tab title="Turmas" active>
                                    <br />
                                    <TurmaArea></TurmaArea>
                                </Tab>
                                <Tab title="Grupos">
                                    <MessageArea></MessageArea>
                                </Tab>
                                <Tab title="Chats">
                                    <MessageArea></MessageArea>
                                </Tab>
                            </Tabs>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

            </div>

            <div className="col s8" style={{ padding: "0%" }}>
                {/* <Chat id="idaleatorio"></Chat> */}
                {
                    chat ? <Chat id="idaleatorio"></Chat>
                        : <Mural></Mural>
                }
            </div>
        </div>
    );

    //#endregion
}