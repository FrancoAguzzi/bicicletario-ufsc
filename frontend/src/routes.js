import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

export default function Routes(props) {
    let usersData = props.usersData;
    let vacanciesNumber = props.vacanciesNumber;
    let reportsArray = props.reportsArray;

    return (
        <BrowserRouter>
            <Route 
            exact path="/" 
            render={() => <HomePage vacanciesNumber={vacanciesNumber} reportsArray={reportsArray} usersData={usersData} />} />
            <Route path="/sobre" component={AboutPage} />
            <Route path="/cadastrar" render={(props) => <RegisterPage usersData={usersData} />} />
        </BrowserRouter>
    )
}