import React from 'react';

const CardComponent = props => {
    return (
        <main className="content">
            <div className="content__card">
                {props.children}
            </div>
        </main>
    )
}

export default CardComponent;