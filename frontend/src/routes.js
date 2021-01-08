import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

const Routes = props => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={() => <HomePage vacanciesNumber={props.vacanciesNumber} />} />
            <Route path="/sobre" component={AboutPage} />
            <Route path="/cadastrar" component={RegisterPage} />
        </BrowserRouter>
    )
}

export default Routes;