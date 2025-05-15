import Calculate from '../../services/calculate';
import './Button.css';

const Button = ({ onButtonClick }) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/', '=', 'Clear'];

    return (
        <div className="calculator__buttons">
            <div className="calculator__number-buttons">
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
