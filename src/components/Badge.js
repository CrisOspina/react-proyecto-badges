import React, { Component } from 'react';

//logo
import confLogo from '../images/badge-header.svg';

//Foto personal
// import avatar from '../images/avatar_cris.png';

//Importar estilos
import './styles/Badge.css';

//Importar componente gravatar
import Gravatar from './Gravatar';

class Badge extends Component {
    render(){

        return (
            <div className="Badge">

                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <Gravatar 
                            className="Badge__avatar"
                            email={this.props.email}
                    />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>

            </div>
        )
    }
}

export default Badge;