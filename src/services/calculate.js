import { evaluate } from 'mathjs';
export const Calculate = (expression) => {
  try {
    // Step 1: Join expression array into a valid math string
    const expressionString = expression.join('');
    console.log(expressionString);

    // Step 2: Ensure the expression is valid before evaluating
    if (!/^[0-9+\-*/.]+$/.test(expressionString)) {
      throw new Error("Invalid Expression");
    }

    // Step 3: Use Function() to safely evaluate the expression
    const result = new Function(`return (${expressionString})`)();

    // Step 4: Handle cases where result is NaN or undefined
    if (isNaN(result) || result === undefined) {
      throw new Error("Invalid Calculation");
    }

    return result;
  } catch (error) {
    return "Error"; // Return "Error" for invalid expressions or calculations
  }
};

export default Calculate;