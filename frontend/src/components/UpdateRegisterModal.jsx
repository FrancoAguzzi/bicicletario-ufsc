import React from 'react';
import axios from 'axios';

class UpdateRegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                user_id: props.userInfo.user_id,
                user_name: props.userInfo.user_name,
                user_password: props.userInfo.user_password,
                user_type: props.userInfo.user_type
            }
        }
    }

    updateTypedName(newName) {
        this.setState({ user_name: newName });
        console.log(this.state.user.user_name)
    }

    updateTypedPassword(newPass) {
        this.setState({ user_password: newPass });
    }

    updateUserInfo() {
        axios.put(`http://localhost:3000/users/${this.props.userInfo.user_id}`);
    }

    render() {
        return (
            <div className="update">
                <div className="update__modal">
                    <button className="update__close" onClick={this.props.onClose}>
                        <img src="/assets/close.svg" alt="Close Icon" className="update__close-image"/>
                    </button>
                    <p className="update__message">Atualize seus dados:</p>
                    <form action="http://localhost:3000/users" method="post" className="update__form">
                        <label className="update__form-label" htmlFor="update_name">Nome:</label>
                        <input type="text" id="update_name" name="user_name" className="update__form-input" onChange={(e) => this.updateTypedName(e.target.value)}/>
                        <label className="update__form-label" htmlFor="update_password">Senha:</label>
                        <input type="password" name="user_password" id="update_password" className="update__form-input"/>
                        <input type="submit" value="Atualizar" className="update__form-submit" onSubmit={() => this.updateUserInfo()}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateRegisterModal;