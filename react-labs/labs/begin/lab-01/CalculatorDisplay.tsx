import React from 'react';
import './CalculatorDisplay.css';

/*
Fill in CalculatorDisplay. It should take three props:
	- lValue: the left operand, a number
	- rValue: the right operand, a number
	- operator: the operator, i.e. + - * /

Caculate the result based on the operands and the operator

Return a div with the class 'calculator-display'
The div should have separate sub-divs for the following:
	- lValue
	- operator
	- rValue
	- An equals sign "="
	- The result
*/
function CalculatorDisplay() {
	return <div className="calculator-display">The equation will go here</div>;
}

export default CalculatorDisplay;
