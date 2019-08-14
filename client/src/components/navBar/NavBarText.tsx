import React from 'react';

import 'bulma/css/bulma.min.css';

//REMOVER TOOS OS HREFS


export default function NavBarText() {
    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={process.env.PUBLIC_URL + 'sistch.png'} alt="" width="85" style={{ maxHeight: '4rem', height:''}} />
                    <h1 style={{ color: '#2196f3', fontFamily: 'rockwell', fontSize: '55px', marginTop: '0.18em' }}>Steacher</h1>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    );
}
