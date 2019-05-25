import React from 'react';

//Importar link para el enlace con la página siguiente
import { Link } from 'react-router-dom';

import './styles/Home.css';

import platziConfLogoImage from '../images/platzi-conf-logo.svg';

import astronautsImage from '../images/astronauts.svg';

class Home extends React.Component {
    render() { 
        return ( 
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img 
                                src={platziConfLogoImage} 
                                alt="Platzi conf logo"
                                className="img-fluid mb-2"
                            />
                            <h1>Sistema de gestión de Badges</h1>
                            <Link 
                                to="/badges"
                                className="btn btn-primary"
                            >
                            Comenzar
                            </Link>
                        </div>
                        <div className="Home_col d-none d-md-block col-md-8">
                            <img 
                                src={astronautsImage}
                                alt="Astronautas"
                                className="img-fluid p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default Home;