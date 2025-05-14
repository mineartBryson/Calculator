import Calculate from '../../services/calculate';
import './Button.css'

const Button = ({ onButtonClick }) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/', '=', 'Clear'];

    return (
    <div className="button_container">
        <div className="number_buttons">
        {numbers.map(value => (
            <button key={value} onClick={() => onButtonClick(value)} id={value}>
            {value}
            </button>
        ))}
        </div>
        <div className="operator_buttons">
        {operators.map(value => (
            <button key={value} onClick={() => onButtonClick(value)} id={value}>
            {value}
            </button>
        ))}
        </div>
    </div>
    );
}


export default Button;