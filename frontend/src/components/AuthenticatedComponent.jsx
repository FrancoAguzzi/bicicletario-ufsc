import React from 'react';
import axios from 'axios';

import CardComponent from './CardComponent';
import ConfirmationComponent from './ConfirmationComponent';
import UpdateRegisterModal from './UpdateRegisterModal';

class AuthenticatedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteConfirmation: false,
            showUpdateModal: false
        }
    }

    deleteUser() {
        axios.delete(`http://localhost:3000/users/${this.props.userInfo.user_id}`);
        window.location.href = "http://localhost:3001";
    }

    renderReportsButton() {
        if (this.props.userInfo.user_type === "security") {
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

    renderDeleteConfirmation() {
        if (this.state.showDeleteConfirmation) {
            return <ConfirmationComponent message="Deseja cancelar seu cadastro?" 
                                          onYes={() => this.deleteUser()}
                                          onNo={() => this.setState({ showDeleteConfirmation: false })}/>
        }
    }

    renderUpdateModal() {
        if (this.state.showUpdateModal) {
            return <UpdateRegisterModal userInfo={this.props.userInfo} onClose={() => this.setState({ showUpdateModal: false })}/>
        }
    }

    render() {
        return (
            <>
                {this.renderDeleteConfirmation()}
                <CardComponent>
                    <h2 className="login__title">Bem-vindo, {this.props.userInfo.user_name}!</h2>
                        <p className="login__text">Guarde sua bicicleta em um local vago</p>
                        <div className="login__buttons">
                            <div className="login__delete">
                                <input type="button" onClick={() => this.setState({ showDeleteConfirmation: true })} id="login__delete" className="login__delete-input" value="Cancelar cadastro" />
                                <label htmlFor="login__delete" className="login__delete-label">
                                    <img src="/assets/delete.svg" alt="Trash Icon" className="login__delete-image"/>
                                </label>
                            </div>
                            <div className="login__update">
                                <input type="button" onClick={() => this.setState({ showUpdateModal: true })} id="login__update" className="login__update-input" value="Atualizar cadastro" />
                                <label htmlFor="login__update" className="login__update-label">
                                    <img src="/assets/update.svg" alt="Update Icon" className="login__update-image"/>
                                </label>
                            </div>
                            { this.renderReportsButton() }
                            { this.renderUpdateModal() }
                        </div>
                    <a href="http://localhost:3001" className="login__button">Sair</a>
                </CardComponent>
            </>
        )
    }
}

export default AuthenticatedComponent;