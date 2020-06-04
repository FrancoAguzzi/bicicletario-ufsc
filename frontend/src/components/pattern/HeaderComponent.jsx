import React from 'react';

export default props =>
    <header className="header">
        <div className="header__logo">
            <img src="/assets/bike-logo.svg" alt="App Logo" className="header__logo-image"/>
        </div>
        <nav className="header__navigation">
            <ul className="header__navigation-links">
                <a href="/" className="header__navigation-link">Entrar</a>
                <a href="/sobre" className="header__navigation-link">Sobre</a>
                <a href="/cadastrar" className="header__navigation-link">Cadastrar-se</a>
            </ul>
        </nav>
    </header>
