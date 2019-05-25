/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { Link } from 'react-router-dom';


//Importar componente gravatar
import Gravatar from './Gravatar';

//Importar estilos
import './styles/BadgestList.css';

function useSearchBadges(badges) {
    const [ query, setQuery ] = React.useState('');
    
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName}${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        })
        setFilteredBadges(result)
    }, [ badges, query ])

    return [ query, setQuery, filteredBadges ]
}

function BadgesList (props) {

    const badges = props.badges;

    const [ query, setQuery, filteredBadges ] = useSearchBadges(badges)


        if(filteredBadges.length === 0) {
            return (
                <div>
                    <div className="form-group">
                        <label>Filtrar badges</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={query}
                            onChange={e => {
                                setQuery(
                                    e.target.value
                                )
                            }}
                        />
                    </div>
                    <h3>No encontramos ningún badge</h3>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="form-group">
                    <label>Filtrar badges</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(
                                e.target.value
                            )
                        }}
                    />
                </div>
                <div className="list-unstyled">
                    {filteredBadges.map((badge) => {
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <div className="card m-3">
                                        <div className="contenedor-img">
                                            <Gravatar
                                                className="Badge__avatar"
                                                email={badge.email}
                                                alt="Avatar"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    {badge.jobTitle}
                                                </li>
                                                <li className="list-group-item">
                                                    {badge.firstName} {badge.lastName}
                                                </li>
                                                <li className="list-group-item">
                                                    {badge.email}
                                                </li>
                                                <li className="list-group-item">
                                                    <b>@</b>{badge.twitter}
                                                </li>
                                            </ul>
                                        </div>        
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </div>
            </div>
        );
}

export default BadgesList;
