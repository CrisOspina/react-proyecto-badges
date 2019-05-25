/* eslint-disable no-template-curly-in-string */
import React from 'react';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css';
import confLogo from '../images/platzi-conf-logo.svg'
import Badge from '../components/Badge';

//Hooks propio
function useIncreaseCount(max) {
    const [ count, setCount ] = React.useState(0)
    if(count > max) {
        setCount(0)
    }
    return [ count, setCount ]
}

const BadgeDetails = (props) => {
    //Hooks
    const [ count, setCount ] = useIncreaseCount(4)

    const badge = props.badge;

    return ( 
         <React.Fragment>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img 
                                src={confLogo} 
                                alt="Logo de la conferencia"
                            />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Acciones</h2>
                        <div>
                            <div>

                                <button 
                                    className="btn btn-primary mr-4"
                                    onClick={() => {
                                        setCount(count + 1)
                                    }}
                                >
                                    Incrementar: {count}
                                </button>

                                <Link 
                                    className="btn btn-primary mb-4" 
                                    to={'/badges/${badge.id}/edit'}
                                >
                                    Editar
                                </Link>
                            </div>
                            <div>
                                <button
                                    onClick={props.onOpenModal} 
                                    className="btn btn-danger"
                                >
                                    Borrar
                                </button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default BadgeDetails;