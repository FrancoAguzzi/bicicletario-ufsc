import React from 'react';

const AdviseModal = props =>
    <div className="advise">
        <div className="advise__modal">
            <p className="advise__message">{props.message}</p>
            <button className="advise__button" onClick={props.onOk}>Ok</button>
        </div>
    </div>

export default AdviseModal;