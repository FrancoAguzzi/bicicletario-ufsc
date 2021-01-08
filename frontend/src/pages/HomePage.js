import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { getUser, getReports, postReport } from '../services'

import HeaderComponent from '../components/pattern/HeaderComponent';
import BackgroundComponent from '../components/pattern/BackgroundComponent';
import AuthenticatedComponent from '../components/AuthenticatedComponent';
import UnauthComponent from '../components/UnauthComponent';
import FullRackModal from '../components/modal/FullRackModal';
import AdviseModal from '../components/modal/AdviseModal';

const HomePage = props => {
    let [typedId, setTypedId] = useState('');
    let [typedPassword, setTypedPassword] = useState('');
    let [vacanciesMessage, setVacanciesMessage] = useState('');
    let [showLoginAdvise, setShowLoginAdvise] = useState(false);
    let [isAuthenticated, setIsAuthenticated] = useState(false);
    let [isFullBikeRack, setFullBikeRack] = useState(false);
    let [getVacanciesNumber, setVacanciesNumber] = useState(0);
    let [getUserInfo, setUserInfo] = useState({});
    let [getReportsList, setReportsList] = useState([]);

    useEffect(() => {
        let localStorageVacancies = window.localStorage.getItem('vacanciesNumber'); 
        if (localStorageVacancies) {
            setVacanciesNumber(localStorageVacancies)
        } else {
            window.localStorage.setItem('vacanciesNumber', props.vacanciesNumber)
        }
    }, [])

    // Update methods
    const updateTypedId = event => {
        if (event.key === "Enter") controlEntry(event);
        else setTypedId(event.target.value);
    }

    const updateTypedPassword = event => {
        if (event.key === "Enter") controlEntry(event);
        else setTypedPassword(event.target.value);
    }

    const updateStoredVacancies = number => {
        setVacanciesNumber(number);
        window.localStorage.setItem('vacanciesNumber', number);
        if (!getVacanciesNumber) setFullBikeRack(true);
    }
    
    // Login control
    const controlEntry = async () => {
        let user = await getUser(typedId);

        if (!typedId || !typedPassword) {
            setShowLoginAdvise(true);
            return false
        }

        if (user.data && user.data.user_password == typedPassword) {
            setUserInfo(user.data)
            let reports = await getReports();
            let reportsNumber = 0;


            if (reports.data.length) {
                reports.data.forEach(report => {
                    if (typedId === report.report_user.user_id) {
                        reportsNumber += 1
                    } 
                })
            }

            if (getVacanciesNumber > 0 && reportsNumber % 2 === 0) {
                updateStoredVacancies(parseInt(getVacanciesNumber) - 1)
                setVacanciesMessage('Guarde sua bicicleta em um local vago.')
                setIsAuthenticated(true)
                postReport({ report_user: user.data })
            }

            if (reportsNumber % 2 !== 0) {
                updateStoredVacancies(parseInt(getVacanciesNumber) + 1)
                setVacanciesMessage('Retire sua bicicleta do bicicletário.')
                setIsAuthenticated(true)
                postReport({ report_user: user.data })
            }

            reports = await getReports();
            setReportsList(reports.data)

            if (getVacanciesNumber == 0) {
                setFullBikeRack(true)
                return false
            }
        } else {
            setShowLoginAdvise(true);
        }
    }

    // Modal rendering
    const renderLoginAdvise = () => {
        if (showLoginAdvise) {
            return <AdviseModal message="Credencial inválida!" onOk={() => setShowLoginAdvise(false)}/>
        }
    }

    const renderFullRackAdvise = () => {
        if (isFullBikeRack && !isAuthenticated) {
            return <FullRackModal message="Bicicletário lotado. Por favor dirija-se à próxima unidade."/>
        }
    }

    return (
        <div className="app">
            <HeaderComponent />
            <BackgroundComponent />
            {isAuthenticated ? 
                <AuthenticatedComponent 
                    vacanciesMessage={vacanciesMessage} 
                    vacanciesNumber={getVacanciesNumber}
                    reportsList={getReportsList}
                    userInfo={getUserInfo} />
                : <UnauthComponent onTypedId={(e) => updateTypedId(e)} 
                                    onTypedPassword={(e) => updateTypedPassword(e)}
                                    onLogin={(e) => controlEntry(e)}/>
            }
            {renderLoginAdvise()}
            {renderFullRackAdvise()}
        </div>
    )
}

export default HomePage;