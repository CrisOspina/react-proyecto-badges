import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Importar logo
import logo from '../images/logo.svg';

//Importar estilos para el navbar
import './styles/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/" className="Navbar__brand">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
                
        );
    }
}

export default Navbar;
