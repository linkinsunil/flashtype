import React from 'react';
import logo from './../../Assets/logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    href="http://github.com/linkinsunil"
                    className="nav-profile-link"
                    rel="noreferrer"
                >
                    Github
                </a>

            </div>
        </div>
    )
}

export default Nav;