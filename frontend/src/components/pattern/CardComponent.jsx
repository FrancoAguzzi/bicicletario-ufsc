import React from 'react';

export default props => {
    return (
        <main className="content">
            <div className="content__card">
                {props.children}
            </div>
        </main>
    )
}