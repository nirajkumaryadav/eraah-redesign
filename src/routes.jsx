import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import MainLayout from './layouts/MainLayout';

const Routes = () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/services" component={Services} />
                </Switch>
            </MainLayout>
        </Router>
    );
};

export default Routes;