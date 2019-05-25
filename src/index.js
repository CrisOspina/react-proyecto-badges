import React from 'react';
import ReactDOM from 'react-dom';

//Importar Bootstrap
import "bootstrap/dist/css/bootstrap.css";

//Importar estilos generales para todo el proyecto
import './global.css';

//Importar nuevo componente
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(
    <App 
        
    />, 
    container);
