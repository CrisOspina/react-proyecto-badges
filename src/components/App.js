import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importar componente layout
import Layout from './Layout';

//Importar primer página
import BadgeNew from '../pages/BadgeNew';

//Importar segunda página
import Badges from '../pages/Badges';

//Importar página not found
import NotFound from '../pages/NotFound';

//Importar page home
import Home from '../pages/Home';

//Importar componente edit
import BadgeEdit from '../pages/BadgeEdit';

//Importar pages badgedetail
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact path="/badges/:badgeId/" component={BadgeDetailsContainer}/>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;