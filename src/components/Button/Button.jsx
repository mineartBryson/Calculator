// Button.jsx
// Component used for all of the calculator buttons: numbers, operators, and clear
import Calculate from '../../services/calculate';
import './Button.css';

const Button = ({ onButtonClick }) => {
    // St up a list of all the currently supported operators and a separate list of the numbers for the clickable butons
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/', '=', 'Clear'];

    return (
        <div className="calculator__buttons">
            <div className="calculator__number-buttons">
                {/* Sets up the number buttons */}
                {numbers.map(value => (
                    <button 
                        key={value} 
                        className="calculator__button calculator__button--number"
                        onClick={() => onButtonClick(value)} 
                        id={value}
                    >
                        {value}
                    </button>
                ))}
            </div>
            {/* Sets up the operator buttons and other functions */}
            <div className="calculator__operator-buttons">
                {operators.map(value => (
                    <button 
                        key={value} 
                        className="calculator__button calculator__button--operator"
                        onClick={() => onButtonClick(value)} 
                        id={value}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>

    );
}

export default Button;
