import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../images/logo.PNG';

import {BookFill, CloudFill,EnvelopeFill,HouseFill} from 'react-bootstrap-icons';

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light tash-nav">
            <a href="/">
                <img src={logo} className="tshub-logo" alt="Logo" />
            </a>

            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show justify-content-end' : ''}`}>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0" >
                    <li className="nav-item active">
                        <a className="nav-link" href="/"><HouseFill/> Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><BookFill/> About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/service"><CloudFill/> Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact"><EnvelopeFill/> Contact </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderComponent;