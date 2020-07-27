import React from 'react';

import CardComponent from './pattern/CardComponent';

export default props => 
    <CardComponent>
        <img src="/assets/ufsc-logo.png" alt="UFSC Logo" className="login__logo"/>
        <h2 className="login__title">Bem-vindo,</h2>
        <p>Informe seus dados para acessar o bicicletário.</p>
        <label htmlFor="login__input" className="login__input-label">Matrícula UFSC:</label>
        <input
            type="text"
            id="login__input"
            className="login__input" 
            onKeyUp={props.onTypedId}
        />
        <label htmlFor="login__password" className="login__password-label">Senha:</label>
        <input
            type="password" 
            id="login__password" 
            className="login__password" 
            onKeyUp={props.onTypedPassword}
        />
        <input
            type="submit"
            value="Entrar"
            className="login__button" 
            onSubmit={props.onLogin}
        />
    </CardComponent>