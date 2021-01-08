import React, { useState } from 'react';

import { createUser } from '../services'

import HeaderComponent from '../components/pattern/HeaderComponent';
import BackgroundComponent from '../components/pattern/BackgroundComponent';
import CardComponent from '../components/pattern/CardComponent';

import AdviseModal from '../components/modal/AdviseModal';

const RegisterPage = () => {
    const [getName, setName] = useState('');
    const [getId, setId] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getType, setType] = useState('community');
    const [registerAdviseMessage, setRegisterAdviseMessage] = useState('');

    const submitForm = async (event) => {
        event.preventDefault();

        let data = {
            user_name: getName,
            user_id: getId,
            user_password: getPassword,
            user_type: getType
        }

        if (getName == '' || getId == '' || getPassword == '') {
            setRegisterAdviseMessage('Por favor, preencha todos os campos.');
            return false;
        }

        let request = await createUser(data);

        switch (request) {
            case 200:
                setRegisterAdviseMessage('Usuário criado com sucesso!');
                break;
            case 409:
                setRegisterAdviseMessage('ID informado já possui cadastro!');
                break;
            case 500:
                setRegisterAdviseMessage('Servidor não pôde completar a requisição!');
                break;
        }
        return request;
    }

    const renderRegisterAdvise = () => {
        if (registerAdviseMessage) {
            return <AdviseModal message={registerAdviseMessage}  onOk={() => setRegisterAdviseMessage('')}/>
        }
    }

    return (
        <div className="app">
            <HeaderComponent />
            <BackgroundComponent />
            <CardComponent>
                <form onSubmit={submitForm} className="registration">
                    <img src="/assets/ufsc-logo.png" alt="UFSC Logo" className="login__logo"/>
                    <h2 className="registration__title">Insira seus dados:</h2>
                    <div className="registration__name">
                        <label htmlFor="name" className="registration__name-label">Nome completo:</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} id="name" className="registration__name-input" name="user_name"/>
                    </div>
                    <div className="registration__id">
                        <label htmlFor="id" className="registration__id-label">Matrícula UFSC:</label>
                        <input type="text" onChange={(e) => setId(e.target.value)} id="id" className="registration__id-input" name="user_id"/>
                    </div>
                    <div className="registration__password">
                        <label htmlFor="password" className="registration__password-label">Escolha uma senha:</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className="registration__password-input" name="user_password"/>
                    </div>
                    <div className="registration__type">
                        <label htmlFor="type" className="registration__type-label">Tipo de usuário:</label>
                        <select id="type" onChange={(e) => setType(e.target.value)} name="user_type" className="registration__type-select">
                            <option value="community" className="registration__type-option">Aluno/Servidor</option>
                            <option value="security" className="registration__type-option">Segurança</option>
                        </select>
                    </div>
                    <div className="registration__submit">
                        <input type="submit" className="registration__submit-button" value="Cadastrar" />
                    </div>
                </form>
            </CardComponent>
            {renderRegisterAdvise()}
        </div>
    )
}

export default RegisterPage;