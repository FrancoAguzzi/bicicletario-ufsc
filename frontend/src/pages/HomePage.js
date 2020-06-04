import React from 'react';
import axios from 'axios';

import HeaderComponent from '../components/pattern/HeaderComponent';
import BackgroundComponent from '../components/pattern/BackgroundComponent';
import AuthenticatedComponent from '../components/AuthenticatedComponent';
import UnauthComponent from '../components/UnauthComponent';
import AdviseComponent from '../components/modal/AdviseModal';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedId: '',
            typedPassword: '',
            showLoginAdvise: false,
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
            this.setState({ showLoginAdvise: true });
            return false
        }

        if (data.some(user => user.user_id === typedId && user.user_password === typedPassword)) {
            console.log('entrada')
            axios.post('http://localhost:3000/reports', { report_user: this.getUserInfo() });
            this.setState({ isAuthenticated: true })
        } else {
            this.setState({ showLoginAdvise: true });
            return false
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

    renderLoginAdvise() {
        if (this.state.showLoginAdvise) {
            return <AdviseComponent message="Credencial inválida!" onOk={() => this.setState({ showLoginAdvise: false })}/>
        }
    }

    render() {
        return (
            <div className="app">
                <HeaderComponent />
                <BackgroundComponent />
                {!this.state.isAuthenticated ? 
                    <UnauthComponent onTypedId={(e) => this.updateTypedId(e)} 
                                     onTypedPassword={(e) => this.updateTypedPassword(e)}
                                     onLogin={(e) => this.controlEntry(e)}/>
                    : <AuthenticatedComponent userInfo={this.getUserInfo()}/> 
                }
                {this.renderLoginAdvise()}
            </div>
        )
    }
}

export default HomePage;