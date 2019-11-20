//#region Npm

import React from 'react';
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

//#endregion

//#region Propriedades

type Props = {

}

//#endregion

export default function Card(props: Props) {

    const chat = false;

    //#region XML

    return (
        <div className="row" style={{ margin: 0, height: "100%" }}>
            <Perfil id="user" direction="left" professor={false}></Perfil>

            <div className="col s4" style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div className="row" style={{ marginBottom: 0, flex: "1 3" }}>
                    <div className="col s12 grey lighten-4" style={{ paddingRight: "0%" }}>
                        <a href="#" data-target="user" className="sidenav-trigger">
                            <img src={process.env.PUBLIC_URL + '/assets/morcego.jpg'} alt="" style={{ borderRadius: "50%", margin: "2% 0% 0% 0%", minWidth: "3rem", maxWidth: "4.5rem", width: "auto", userSelect: "none" }} />
                        </a>
                    </div>

                    <div className="col s12" style={{ padding: "0%", height: "35%" }}>
                        <ul className="tabs">
                            <li className="tab col s4 flow-text"><a className="active" href="#test1">Turmas</a></li>
                            <li className="tab col s4 flow-text"><a href="#test2">Grupos</a></li>
                            <li className="tab col s4 flow-text"><a href="#test3">Chats</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row" style={{ height: "100%", flex: 10, overflowY: "auto", marginBottom: 0 }}>
                    <div id="test1" style={{ padding: "0%" }}>
                        <TurmaArea></TurmaArea>
                    </div>

                    <div id="test2" style={{padding: "0%"}}>
                        <MessageArea></MessageArea>
                    </div>

                    <div id="test3" style={{padding: "0%"}}>
                        <MessageArea></MessageArea>
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