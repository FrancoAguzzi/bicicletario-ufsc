import React from 'react';
import axios from 'axios';

import HeaderComponent from '../components/HeaderComponent';
import BackgroundComponent from '../components/BackgroundComponent';

class AuthenticatedComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteUser() {
        if (window.confirm('Deseja mesmo excluir seu cadastro?')) {
            axios.delete(`http://localhost:3000/users/${this.props.userId}`);
            window.location.href = "http://localhost:3001";
        }
    }

    renderReportsButton() {
        if (this.props.userType === "security") {
            return (
                <div className="login__reports">
                    <input type="button" id="login__reports" className="login__reports-input" value="Gerar relatórios" />
                    <label htmlFor="login__reports" className="login__reports-label">
                        <img src="/assets/reports.svg" alt="Reports Icon" className="login__reports-image"/>
                    </label>
                </div>
            )
        }
    }

    render() {
        return (
            <main className="content">
                <div className="content__login">
                    <h2 className="login__title">Bem-vindo,</h2>
                    <p className="login__text">Guarde sua bicicleta em um local vago</p>
                    <div className="login__buttons">
                        <div className="login__delete">
                            <input type="button" onClick={() => this.deleteUser()} id="login__delete" className="login__delete-input" value="Cancelar cadastro" />
                            <label htmlFor="login__delete" className="login__delete-label">
                                <img src="/assets/delete.svg" alt="Trash Icon" className="login__delete-image"/>
                            </label>
                        </div>
                        <div className="login__update">
                            <input type="button" id="login__update" className="login__update-input" value="Atualizar cadastro" />
                            <label htmlFor="login__update" className="login__update-label">
                                <img src="/assets/update.svg" alt="Update Icon" className="login__update-image"/>
                            </label>
                        </div>
                        { this.renderReportsButton() }
                    </div>
                    <a href="http://localhost:3001" className="login__button">Sair</a>
                </div>
            </main>
        )
    }
}

export default AuthenticatedComponent;