import React from 'react';
import axios from 'axios';

import HeaderComponent from '../components/pattern/HeaderComponent';
import BackgroundComponent from '../components/pattern/BackgroundComponent';
import AuthenticatedComponent from '../components/AuthenticatedComponent';
import UnauthComponent from '../components/UnauthComponent';

import FullRackModal from '../components/modal/FullRackModal';
import AdviseModal from '../components/modal/AdviseModal';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedId: '',
            typedPassword: '',
            totalVacanciesNumber: props.vacanciesNumber,
            emptyVacanciesNumber: null,
            vacanciesMessage: 'Guarde sua bicicleta em um local vago.',
            showLoginAdvise: false,
            isAuthenticated: false,
            fullBikeRack: false
        }
    }

    componentDidMount() {
        if (!window.localStorage.getItem('vacanciesNumber')) {
            window.localStorage.setItem('vacanciesNumber', this.state.vacanciesNumber);
        }
        this.setState({
            emptyVacanciesNumber: window.localStorage.getItem('vacanciesNumber')
        })
    }

    updateTypedId(event) {
        if (event.key === "Enter") this.controlEntry(event);
        else this.setState({ typedId: event.target.value });
    }

    updateTypedPassword(event) {
        if (event.key === "Enter") this.controlEntry(event);
        else this.setState({ typedPassword: event.target.value });
    }

    updateStoredVacancies() {
        window.localStorage.setItem('vacanciesNumber', this.state.emptyVacanciesNumber);
        if (!this.state.emptyVacanciesNumber) this.setState({ fullBikeRack: true });
    }
    
    controlEntry() {
        let data = this.props.usersData;
        const { typedId, typedPassword } = this.state;

        if (!typedId || !typedPassword) {
            this.setState({ showLoginAdvise: true });
            return false
        }

        if (data.some(user => user.user_id === typedId && user.user_password === typedPassword)) {
            let reports = this.props.reportsArray;
            let reportsNumber = 0;

            reports.forEach(report => {
                if (typedId === report.report_user.user_id) reportsNumber += 1;
            });
            
            if (this.state.emptyVacanciesNumber > 0 && reportsNumber % 2 === 0) {
                this.setState({
                    emptyVacanciesNumber: this.state.emptyVacanciesNumber--
                })
                this.updateStoredVacancies();
                this.setState({ isAuthenticated: true });
                axios.post('http://localhost:3000/reports', { report_user: this.getUserInfo() });
            }

            if (this.state.emptyVacanciesNumber == 0) {
                this.setState({ 
                    fullBikeRack: true 
                });
            }

            if (reportsNumber % 2 !== 0) {
                this.setState({ 
                    emptyVacanciesNumber: this.state.emptyVacanciesNumber++,
                    vacanciesMessage: 'Retire sua bicicleta do bicicletário.'
                });
                this.updateStoredVacancies();
                this.setState({ isAuthenticated: true });
                axios.post('http://localhost:3000/reports', { report_user: this.getUserInfo() });
            }
            
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
            return <AdviseModal message="Credencial inválida!" onOk={() => this.setState({ showLoginAdvise: false })}/>
        }
    }

    renderFullRackAdvise() {
        if (this.state.fullBikeRack && !this.state.isAuthenticated) {
            return <FullRackModal message="Bicicletário lotado. Favor dirija-se à próxima unidade."/>
        }
    }

    render() {
        return (
            <div className="app">
                <HeaderComponent />
                <BackgroundComponent />
                {this.state.isAuthenticated ? 
                    <AuthenticatedComponent vacanciesMessage={this.state.vacanciesMessage} userInfo={this.getUserInfo()} /> 
                    : <UnauthComponent onTypedId={(e) => this.updateTypedId(e)} 
                                     onTypedPassword={(e) => this.updateTypedPassword(e)}
                                     onLogin={(e) => this.controlEntry(e)}/>
                }
                {this.renderLoginAdvise()}
                {this.renderFullRackAdvise()}
            </div>
        )
    }
}

export default HomePage;