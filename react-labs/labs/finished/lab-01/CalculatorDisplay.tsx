import React from 'react';
import './CalculatorDisplay.css';

/**
 *
 * @param {{lValue: number, rValue: number, operator: '+' | '-' | '*' | '/'}} props
 * @returns
 *
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
function CalculatorDisplay({ lValue, rValue, operator }) {
	let result = 0;
	switch (operator) {
		case '+':
			result = lValue + rValue;
			break;
		case '-':
			result = lValue - rValue;
			break;
		case '*':
			result = lValue * rValue;
			break;
		case '/':
			result = lValue / rValue;
			break;
		default:
			result = 'unknown';
	}

	return (
		<div className="calculator-display">
			<div className="lValue">{lValue}</div>
			<div className="operator">{operator}</div>
			<div className="rValue">{rValue}</div>
			<div>=</div>
			<div className="result">{result}</div>
		</div>
	);
}

export default CalculatorDisplay;
