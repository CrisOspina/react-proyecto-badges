import React from 'react';

import './styles/Home.css';

function NotFound() {
    return (
        <div className="Home">
            <div className="container">
                <div className="row">   
                    <div className="col-12">
                        <h1 className="text-center">404: Not found</h1>
                    </div> 
                </div>
            </div>
        </div>
    );        
}

export default NotFound;