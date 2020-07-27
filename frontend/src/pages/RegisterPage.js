import React from 'react';

import HeaderComponent from '../components/pattern/HeaderComponent';
import BackgroundComponent from '../components/pattern/BackgroundComponent';
import CardComponent from '../components/pattern/CardComponent';

class RegisterPage extends React.Component {
    render() {
        return (
            <div className="app">
                <HeaderComponent />
                <BackgroundComponent />
                <CardComponent>
                    <form target="_blank" action="http://localhost:3000/users" method="post" className="registration">
                        <img src="/assets/ufsc-logo.png" alt="UFSC Logo" className="login__logo"/>
                        <h2 className="registration__title">Insira seus dados:</h2>
                        <div className="registration__name">
                            <label htmlFor="name" className="registration__name-label">Nome completo:</label>
                            <input type="text" id="name" className="registration__name-input" name="user_name"/>
                        </div>
                        <div className="registration__id">
                            <label htmlFor="id" className="registration__id-label">Matrícula UFSC:</label>
                            <input type="text" id="id" className="registration__id-input" name="user_id"/>
                        </div>
                        <div className="registration__password">
                            <label htmlFor="password" className="registration__password-label">Escolha uma senha:</label>
                            <input type="password" id="password" className="registration__password-input" name="user_password"/>
                        </div>
                        <div className="registration__type">
                            <label htmlFor="type" className="registration__type-label">Tipo de usuário:</label>
                            <select id="type" name="user_type" className="registration__type-select">
                                <option value="comunity" className="registration__type-option">Aluno/Servidor</option>
                                <option value="security" className="registration__type-option">Segurança</option>
                            </select>
                        </div>
                        <div className="registration__submit">
                            <input type="submit" className="registration__submit-button" value="Cadastrar" />
                        </div>
                    </form>
                </CardComponent>
            </div>
        )
    }
}

export default RegisterPage;