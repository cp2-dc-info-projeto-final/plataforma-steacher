import React from 'react';

import 'bulma/css/bulma.min.css';

//REMOVER TOOS OS HREFS


export default function NavBar() {
    return (
        <nav className="navbar is-black level" role="navigation" aria-label="main navigation">
            <div className="navbar-brand level-item has-text-centered" style={{maxHeight: '4.2rem'}}>
                <a className="navbar-item" href="https://bulma.io">
                    <img src={process.env.PUBLIC_URL + 'sistch2.png'} alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="85" style={{maxHeight: '3.8rem'}}/>
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
