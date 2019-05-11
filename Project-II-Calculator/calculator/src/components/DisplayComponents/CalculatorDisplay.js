import React from 'react';
import './Display.css';
import '../ButtonComponents/ActionButton';
import '../ButtonComponents/NumberButton';

class CalculatorDisplay extends React.Component {
    render() {
        return (
            <div className="calculator-display">
                <ActionButton buttonStyle="action-button" text="clear" />
                <NumberButton buttonStyle="number-button" text="/" />
                <NumberButton buttonStyle="number-button" text="7" />
                <NumberButton buttonStyle="number-button" text="8" />
                <NumberButton buttonStyle="number-button" text="9" />
                <NumberButton buttonStyle="number-button" text="*" />
                <NumberButton buttonStyle="number-button" text="4" />
                <NumberButton buttonStyle="number-button" text="5" />
                <NumberButton buttonStyle="number-button" text="6" />
                <NumberButton buttonStyle="number-button" text="-" />
                <NumberButton buttonStyle="number-button" text="1" />
                <NumberButton buttonStyle="number-button" text="2" />
                <NumberButton buttonStyle="number-button" text="3" />
                <NumberButton buttonStyle="number-button" text="+" />
                <ActionButton buttonStyle="action-button" text="0" />
                <NumberButton buttonStyle="number-button" text="=" />
            </div>
        );
    }
}