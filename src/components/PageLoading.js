import React from 'react';

//importar estilos
import './styles/PageLoading.css';

import Loader from './Loader';

function PageLoading () {
    return (
        <div className="PageLoading">
            <Loader />
        </div>
    )
}

export default PageLoading;