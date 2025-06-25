import React from 'react';
import './CalculatorDisplay.css';

export type MathOperator = '+' | '-' | '*' | '/';

interface CalculatorDisplayProps {
	lValue: number;
	rValue: number;
	operator: MathOperator
}

function CalculatorDisplay({ lValue, rValue, operator }: CalculatorDisplayProps) {
	let result: number | undefined;
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
			result = undefined;
	}

	return (
		<div className="calculator-display">
			<div className="lValue">{lValue}</div>
			<div className="operator">{operator}</div>
			<div className="rValue">{rValue}</div>
			<div>=</div>
			{/* If result !== undefined, use result, else use 'No result' */}
			{/* <div className="result">{result !== undefined ? result : 'No result'}</div> */}

			{/* If result is a true value, use result, else use 'No result' */}
			{/* <div className="result">{result ? result : 'No result'}</div> */}

			{/* || Is result a true value? */}
			{/* <div className="result">{result || 'No result'}</div> */}

			{/* ?? Is result "null" or "undefined" */}
			<div className="result">{result ?? 'No result'}</div>
		</div>
	);
}

export default CalculatorDisplay;
