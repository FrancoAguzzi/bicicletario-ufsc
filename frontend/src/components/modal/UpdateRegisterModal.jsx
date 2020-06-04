import React from 'react';
import axios from 'axios';
import AdviseModal from './AdviseModal';

class UpdateRegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                user_name: props.userInfo.user_name,
                user_password: props.userInfo.user_password
            },
            showUpdatedModal: false
        }
    }

    updateTypedName(newName) {
        if (newName === "") this.setState({ user_name: this.props.userInfo.user_name });
        else this.setState({ user_name: newName });
    }

    updateTypedPassword(newPass) {
        if (newPass === "") this.setState({ user_password: this.props.userInfo.user_password });
        else this.setState({ user_password: newPass });
    }

    updateUserInfo() {
        axios.put(`http://localhost:3000/users/${this.props.userInfo.user_id}`, { user_name: this.state.user_name, user_password: this.state.user_password });
        this.setState({ showUpdatedModal: true })
    }

    renderUpdatedModal() {
        if (this.state.showUpdatedModal) {
            return <AdviseModal message="Os campos preenchidos foram atualizados!" onOk={() => {
                    this.setState({ showUpdatedModal: false });
                    window.location.href="http://localhost:3001"
                }
            }/>
        }
    }

    render() {
        return (
            <>
            <div className="update">
                <div className="update__modal">
                    <button className="update__close" onClick={this.props.onClose}>
                        <img src="/assets/close.svg" alt="Close Icon" className="update__close-image"/>
                    </button>
                    <p className="update__message">Atualize seus dados:</p>
                    <label className="update__label" htmlFor="update_name">Nome:</label>
                    <input type="text" id="update_name" className="update__input" onChange={(e) => this.updateTypedName(e.target.value)}/>
                    <label className="update__label" htmlFor="update_password">Senha:</label>
                    <input type="password" id="update_password" className="update__input" onChange={(e) => this.updateTypedPassword(e.target.value)}/>
                    <input type="submit" value="Atualizar" className="update__submit" onClick={() => this.updateUserInfo()}/>
                </div>
            </div>
            {this.renderUpdatedModal()}
            </>
        )
    }
}

export default UpdateRegisterModal;