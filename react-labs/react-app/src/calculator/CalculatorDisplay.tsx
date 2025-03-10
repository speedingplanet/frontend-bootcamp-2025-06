import React from 'react';
import './CalculatorDisplay.css';

export type MathOperator = '+' | '-' | '*' | '/';

interface CalculatorDisplayProps {
	lValue: number;
	rValue: number;
	// Union type: pick one of the following options
	operator: MathOperator;
}

function CalculatorDisplay({ lValue, rValue, operator }: CalculatorDisplayProps) {
	let result: number | string = 0;
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
