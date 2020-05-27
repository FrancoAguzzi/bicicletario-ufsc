import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import BackgroundComponent from '../components/BackgroundComponent';
import AuthenticatedComponent from '../components/AuthenticatedComponent';
import CardComponent from '../components/CardComponent';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedId: '',
            typedPassword: '',
            isAuthenticated: false,
        }
    }

    updateTypedId(event) {
        if (event.key === "Enter") this.controlEntry();
        else this.setState({ typedId: event.target.value });
    }

    updateTypedPassword(event) {
        if (event.key === "Enter") this.controlEntry();
        else this.setState({ typedPassword: event.target.value });
    }
    
    controlEntry() {
        let data = this.props.usersData;
        const { typedId, typedPassword, isAuthenticated } = this.state;

        if (!typedId || !typedPassword) {
            alert('Preencha os campos corretamente');
            return false
        }

        if (data.some(user => user.user_id === typedId && user.user_password === typedPassword)) {
            this.setState({ isAuthenticated: true })
        } else {
            alert('Autenticação inválida, tente novamente');
        }
    }

    getUserInfo() {
        let data = this.props.usersData;
        let userInfo;
        const { typedId } = this.state;

        data.find(user => {
            if (user.user_id === typedId) userInfo = user;
        })

        return userInfo;
    }

    render() {
        const UnauthPage = (
            <CardComponent>
                <img src="/assets/ufsc-logo.png" alt="UFSC Logo" className="login__logo"/>
                <h2 className="login__title">Bem-vindo,</h2>
                <p>Informe seus dados para acessar o bicicletário.</p>
                <label htmlFor="login__input" className="login__input-label">Matrícula UFSC:</label>
                <input
                    type="text"
                    id="login__input"
                    className="login__input" 
                    onKeyUp={(event) => this.updateTypedId(event)}
                />
                <label htmlFor="login__password" className="login__password-label">Senha:</label>
                <input
                    type="password" 
                    id="login__password" 
                    className="login__password" 
                    onKeyUp={(event) => this.updateTypedPassword(event)}
                />
                <button 
                    className="login__button" 
                    onClick={() => this.controlEntry()}
                >
                    Entrar
                </button>
            </CardComponent>
        )

        return (
            <div className="app">
                <HeaderComponent />
                <BackgroundComponent />
                {this.state.isAuthenticated ? <AuthenticatedComponent userInfo={this.getUserInfo()}/> : UnauthPage}
            </div>
        )
    }
}

export default HomePage;