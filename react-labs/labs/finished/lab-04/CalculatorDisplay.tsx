import React from 'react';
import './CalculatorDisplay.css';

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
