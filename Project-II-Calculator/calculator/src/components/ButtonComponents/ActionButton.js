import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    render() {
        return (
            <button className="action-button">{this.props.label}</button>
        );
    }
}

export default ActionButton;