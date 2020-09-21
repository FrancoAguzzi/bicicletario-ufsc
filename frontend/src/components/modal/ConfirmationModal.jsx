import React from 'react';

const ConfirmationModal = props =>
    <div className="confirmation">
        <div className="confirmation__modal">
            <p className="confirmation__message">{props.message}</p>
            <div className="confirmation__buttons">
                <input className="confirmation__button" type="button" value="Sim" onClick={props.onYes}/>
                <input className="confirmation__button" type="button" value="Não" onClick={props.onNo}/>
            </div>
        </div>
    </div>

export default ConfirmationModal;