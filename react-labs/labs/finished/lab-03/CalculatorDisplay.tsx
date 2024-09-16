import React from 'react';
import './CalculatorDisplay.css';

/*
Do not display the equation unless the operator is not an empty string

Modify the output so that it does not appear if the operator is an empty string.
Notes about different possibilities:
- Using the `hidden` attribute does not work. Why?
- A style attribute might work, but what property?
	- visibility?
	- display?
- You could create an additional class to manage visibility instead
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
		<div
			className="calculator-display"
			style={{ visibility: operator === '' ? 'hidden' : 'visible' }}
		>
			<div className="lValue">{lValue}</div>
			<div className="operator">{operator}</div>
			<div className="rValue">{rValue}</div>
			<div>=</div>
			<div className="result">{result}</div>
		</div>
	);
}

export default CalculatorDisplay;
