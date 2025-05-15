import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Calculate from './services/calculate';

function App() {
  const [expression, setExpression] = useState([]);
  const [currentNumber, setCurrentNumber] = useState("");

  const handleButtonClick = (value) => {
    if (value === "Clear") {
      setExpression([]);
      setCurrentNumber("");
      return;
    }

    if (!isNaN(value)) {
      setCurrentNumber(prev => prev + value);
    } else if (value === "=") {
      if (currentNumber !== "") {
        setExpression(prev => {
          const updatedExpression = [...prev, currentNumber];
          setCurrentNumber("");

          const result = Calculate(updatedExpression);
          setExpression([result]);
          return updatedExpression;
        });
      }
    } else {
      if (currentNumber !== "") {
        setExpression(prev => [...prev, currentNumber, value]);
        setCurrentNumber("");
      } else {
        setExpression(prev => [...prev, value]);
      }
    }
  };

  return (
    <div className="calculator">
      <h1 className="calculator__title">Calculator</h1>
      <div className="calculator__container">
        <div className="calculator__display">
          <p id="calculator__output">
            {expression.length > 0 || currentNumber ? expression.join(' ') + currentNumber : "0"}
          </p>
        </div>
        <div className="calculator__buttons">
          <Button onButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
