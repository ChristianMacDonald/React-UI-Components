import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    render() {
        return (
            <button className={this.props.buttonStyle}>{this.props.text}</button>
        );
    }
}

export default NumberButton;