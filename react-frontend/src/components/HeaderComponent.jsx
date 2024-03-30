import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../images/logo.PNG';

class HeaderComponent extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">


                <a href="/">
                    <img src={logo} class="tshub-logo" alt="Logo"/>
                </a>
    
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        
                </button>
        
                <div class="menu-area menu-sticky" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/service">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;