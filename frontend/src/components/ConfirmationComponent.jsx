import React from 'react';

export default props => {
    <div className="confirmation">
        <div className="confirmation__modal">
            <p className="confirmation__message">{props.message}</p>
            <input type="button" value="Sim"/>
            <input type="button" value="Não"/>
        </div>
    </div>
}