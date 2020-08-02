import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    const textLength = props.textLength;
    let validationOutput = null;
    if (textLength <= 5) {
        validationOutput = (<p className="error">Text too short!</p>);
    } else {
        validationOutput = (<p className="success">Text too long!</p>);
    }
    return (
        <div>
            {validationOutput}
        </div>
    );
}

export default validationComponent;