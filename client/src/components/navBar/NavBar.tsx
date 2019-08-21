import React from 'react';

import '../login/form/node_modules/bulma/css/bulma.min.css';

//REMOVER TOOS OS HREFS

export default function NavBar() {
    return (
        <nav className="navbar is-black level" role="navigation" aria-label="main navigation">
            <div className="navbar-brand level-item has-text-centered" style={{maxHeight: '4rem'}}>
                <a href="/">
                    <img src={process.env.PUBLIC_URL + 'assets/logo.png'} alt="Steacher logo" width="85" style={{maxHeight: '3.5rem', }}/>
                </a>
            </div>
        </nav>
    );
}
