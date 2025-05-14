import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Calculate from './services/calculate'

function App() {
  const [expression, setExpression] = useState([])
  const [currentNumber, setCurrentNumber] = useState("")

  const clearState = () => {
    setExpression([]);
  }

const handleButtonClick = (value) => {

  if (value === "Clear") {
    setExpression([]);
    setCurrentNumber("");
    return; // Exit early to prevent unintended behavior
  }

  if (!isNaN(value)) {
    setCurrentNumber(prev => prev + value); // Append digits to form full numbers
  } else if (value === "=") {
    // Ensure last number is stored before calculating
    if (currentNumber !== "") {
      setExpression(prev => {
        const updatedExpression = [...prev, currentNumber]; // Store last number
        setCurrentNumber(""); // Reset input
        console.log("Final Expression before Calculation:", updatedExpression); // Debug Output

        const result = Calculate(updatedExpression); // Calculate result
        setExpression([result]); // Show result
        return updatedExpression;
      });
    }
  } else {
    // If an operator is clicked, store the complete number before adding the operator
    if (currentNumber !== "") {
      setExpression(prev => [...prev, currentNumber, value]);
      setCurrentNumber(""); // Reset after storing number
    } else {
      setExpression(prev => [...prev, value]); // Allow consecutive operators
    }
  }
};

  return (
    <>
      <div>
        <h1 className='calculator_title'>Calculator</h1>
        <div className='calculator_container'>
          <div className='display_container'>
            <p id="calculator_display">
              {expression.length > 0 || currentNumber ? expression.join(' ') + currentNumber : "0"}
            </p>
          </div>
          <div className='calculator_buttons'>
            <Button onButtonClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
