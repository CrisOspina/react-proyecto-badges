import React, { Component } from 'react';

class BadgeForm extends Component {


    //Métodos para los buttons
    handleClick = e => {
        console.log("Button presionado")
    }

    // //Método para el formulario
    // handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Primer nombre</label>
                        <input  className="form-control"
                                type="text" 
                                name="firstName"
                                onChange={this.props.onChange}
                                value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Apellido</label>
                        <input  className="form-control"
                                type="text" 
                                name="lastName"
                                onChange={this.props.onChange}
                                value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input  className="form-control"
                                type="email" 
                                name="email"
                                onChange={this.props.onChange}
                                value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Profesión</label>
                        <input  className="form-control"
                                type="text" 
                                name="jobTitle"
                                onChange={this.props.onChange}
                                value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input  className="form-control"
                                type="text" 
                                name="twitter"
                                onChange={this.props.onChange}
                                value={this.props.formValues.twitter}
                        />
                    </div>

                    <button className="btn btn-primary"
                            onClick={this.handleClick}>
                            Enviar
                    </button>
                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;
