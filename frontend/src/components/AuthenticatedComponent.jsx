import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { deleteUser } from '../services'

import CardComponent from './pattern/CardComponent'
import ConfirmationComponent from './modal/ConfirmationModal'
import UpdateRegisterModal from './modal/UpdateRegisterModal'
import ReportsModal from './modal/ReportsModal'
import BikeAnimation from './BikeAnimation'

const AuthenticatedComponent = props => {
    let [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    let [showUpdateModal, setShowUpdateModal] = useState(false)
    let [showReportsModal, setShowReportsModal] = useState(false)
    let [vacanciesNumber, setVacanciesNumber] = useState(0)

    useEffect(() => {
        setVacanciesNumber(window.localStorage.getItem('vacanciesNumber'));
    }, []);

    const deleteUserMethod = () => {
        deleteUser(props.userInfo.user_id);
        window.location.reload(false);
    }

    const renderReportsButton = () => {
        if (props.userInfo.user_type === "security") {
            return (
                <div className="login__reports">
                    <input type="button" id="login__reports" className="login__reports-input" value="Gerar relatórios" onClick={() => setShowReportsModal(true)}/>
                    <label htmlFor="login__reports" className="login__reports-label">
                        <img src="/assets/reports.svg" alt="Reports Icon" className="login__reports-image"/>
                    </label>
                </div>
            )
        }
    }

    const renderReportsModal = () => {
        if (showReportsModal) {
            return <ReportsModal reportsList={props.reportsList} onClose={() => setShowReportsModal(false)} />
        }
    }

    const renderDeleteConfirmation = () => {
        if (showDeleteConfirmation) {
            return <ConfirmationComponent message="Deseja cancelar seu cadastro?" 
                                          onYes={() => deleteUserMethod()}
                                          onNo={() => setShowDeleteConfirmation(false)}/>
        }
    }

    const renderUpdateModal = () => {
        if (showUpdateModal) {
            return <UpdateRegisterModal userInfo={props.userInfo} onClose={() => setShowUpdateModal(false)}/>
        }
    }

    return (
        <>
            {renderDeleteConfirmation()}
            <CardComponent>
                <h2 className="login__title">Bem-vindo, {props.userInfo.user_name}!</h2>
                <p className="login__text">{props.vacanciesMessage}</p>
                    <div className="login__animation">
                        <BikeAnimation />
                    </div>
                    <div className="login__buttons">
                        <div className="login__delete">
                            <input type="button" onClick={() => setShowDeleteConfirmation(true)} id="login__delete" className="login__delete-input" value="Cancelar cadastro" />
                            <label htmlFor="login__delete" className="login__delete-label">
                                <img src="/assets/delete.svg" alt="Trash Icon" className="login__delete-image"/>
                            </label>
                        </div>
                        <div className="login__update">
                            <input type="button" onClick={() => setShowUpdateModal(true)} id="login__update" className="login__update-input" value="Atualizar cadastro" />
                            <label htmlFor="login__update" className="login__update-label">
                                <img src="/assets/update.svg" alt="Update Icon" className="login__update-image"/>
                            </label>
                        </div>
                        { renderReportsButton() }
                        { renderUpdateModal() }
                    </div>
                    { renderReportsModal() }
                <a onClick={() => window.location.reload(false)} className="login__button">Sair</a>
            </CardComponent>
            <div className="vacancies__modal">
                <p className="vacancies__text">
                    Vagas disponíveis 
                    <br/> 
                    <span>{vacanciesNumber}</span>
                </p>
            </div>
        </>
    )
}

export default AuthenticatedComponent;