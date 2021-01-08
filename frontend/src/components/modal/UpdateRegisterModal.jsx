import React, { useState } from 'react'
import axios from 'axios'
import AdviseModal from './AdviseModal'

import { updateUser } from '../../services'

const UpdateRegisterModal = props => {
    let [userName, setUserName] = useState('')
    let [userPassword, setUserPassword] = useState('')
    let [showUpdatedModal, setShowUpdateModal] = useState(false)

    const updateTypedName = newName => {
        if (newName === "") setUserName(props.userInfo.user_name);
        else setUserName(newName);
    }

    const updateTypedPassword = newPass => {
        if (newPass === "") setUserPassword(props.userInfo.user_password);
        else setUserPassword(newPass);
    }

    const updateUserInfo = () => {
        updateUser(props.userInfo.user_id, 
                    { user_name: userName, user_password: userPassword });
        setShowUpdateModal(true)
    }

    const renderUpdatedModal = () => {
        if (showUpdatedModal) {
            return <AdviseModal 
                        message="Os campos preenchidos foram atualizados!" 
                        onOk={() => {
                            setShowUpdateModal(false);
                            window.location.href="http://localhost:3001"
                        }}/>
        }
    }

    return (
        <>
        <div className="update">
            <div className="update__modal">
                <button className="update__close" onClick={props.onClose}>
                    <img src="/assets/close.svg" alt="Close Icon" className="update__close-image"/>
                </button>
                <p className="update__message">Atualize seus dados:</p>
                <label className="update__label" htmlFor="update_name">Nome:</label>
                <input type="text" id="update_name" className="update__input" onChange={(e) => updateTypedName(e.target.value)}/>
                <label className="update__label" htmlFor="update_password">Senha:</label>
                <input type="password" id="update_password" className="update__input" onChange={(e) => updateTypedPassword(e.target.value)}/>
                <input type="submit" value="Atualizar" className="update__submit" onClick={() => updateUserInfo()}/>
            </div>
        </div>
        {renderUpdatedModal()}
        </>
    )
}

export default UpdateRegisterModal;