import React, { Component } from 'react';

//Importar componente link de react router
import { Link } from 'react-router-dom';

//Importar estilos
import './styles/Badges.css';

//Importar imagen confLogo
import confLogo from '../images/badge-header.svg';

//Importar componente lista
import BadgesList from '../components/BadgesList';

//Importar componente de loading
import PageLoading from '../components/PageLoading';

//Importar componente de error
import PageError from '../components/PageError';

//Importar api
import api from '../api';

//Importar componente mini loader
import MiniLoader from '../components/MiniLoader';

class Badges extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }

    //Se ejecuta despues del constructor y render.
    componentDidMount() {
        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    //Preparación de llamada de la API
    fetchData = async () => {
        //Reinicializar valores
        this.setState({
            loading: true,
            error: null
        })

        //Preparando el entorno de la llamada
        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })

        }
    }
    
    //Se ejecuta después del componentWillMount
    componentDidUpdate(prevProps, prevState){
       
    }
    
    //Se ejecuta antes de apagarse el componente.
    // componentWillUnmount() {
    //     console.log('salida del componente')
    //     clearTimeout(this.timeoutId)
    // }

    render() {
        if(this.state.loading && !this.state.data) {
            return <PageLoading />;
        }

        if(this.state.error) {
            return  <PageError error={this.state.error} />;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary" >Badge nuevo</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList 
                                badges = {this.state.data}
                            />
                        </div>
                    </div>

                    {this.state.loading && <MiniLoader/>}

                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
