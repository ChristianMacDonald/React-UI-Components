import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

class CalculatorDisplay extends React.Component {
    render() {
        return (
            <div className="calculator-display">
                <h1 className="calculator-result">0</h1>
                <ActionButton buttonStyle="calculator-button action-button border-left" text="clear" />
                <NumberButton buttonStyle="calculator-button number-button operator-button bold border-right border-left" text="/" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="7" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="8" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="9" />
                <NumberButton buttonStyle="calculator-button number-button operator-button bold border-top border-right border-left" text="*" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="4" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="5" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="6" />
                <NumberButton buttonStyle="calculator-button number-button operator-button bold border-top border-right border-left" text="-" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="1" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="2" />
                <NumberButton buttonStyle="calculator-button number-button bold border-top border-left" text="3" />
                <NumberButton buttonStyle="calculator-button number-button operator-button bold border-top border-right border-left" text="+" />
                <ActionButton buttonStyle="calculator-button action-button bold border-top border-bottom border-left" text="0" />
                <NumberButton buttonStyle="calculator-button number-button bold operator-button border-top border-right border-bottom border-left" text="=" />
            </div>
        );
    }
}

export default CalculatorDisplay;