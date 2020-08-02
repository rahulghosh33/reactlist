import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="charBox" onClick={props.click}>{props.character}</div>
    );
}

export default charComponent;