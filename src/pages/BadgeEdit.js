import React, { Component } from 'react';

//Importar imagen para el hero
import header from '../images/platzi-conf-logo.svg';

//Importar estilos para el hero
import './styles/BadgeEdit.css';

//Importar componente Badge
import Badge from '../components/Badge';

//Importar componente BadgeForm
import BadgeForm from '../components/BadgeForm';

//Importar componente loading
import PageLoading from '../components/PageLoading';

//Importa api
import api from '../api';

class BadgeEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: null,
            form: {
                firstName: '',
                lastName : '',
                email:     '',
                avatarURL: '',
                jobTitle: '',
                twitter:  ''
            }
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (e) => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId, this.state.form
            )

            this.setState({
                loading: false,
                form: data
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    //Método para los inputs
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    //Método para enviar datos PUT
    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({
            loading: true,
            error: null
        })
        
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({
                loading: false
            })
            this.props.history.push('/badges');
        } catch(error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName = {this.state.form.firstName || 'Primer nombre'}
                                lastName  = {this.state.form.lastName || 'Apellidos'}
                                email     = {this.state.form.email || 'Correo'}
                                avatarURL = {this.state.form.avatarURL || 'Foto'}
                                jobTitle  = {this.state.form.jobTitle || 'Profesión'}
                                twitter   = {this.state.form.twitter || 'Twitter'}
                            />
                        </div>

                        <div className="col-6">
                            <h1>Editar asistente</h1>
                            <BadgeForm 
                                onSubmit={this.handleSubmit}
                                onChange = {this.handleChange}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;

