import React from 'react';
import './CalculatorDisplay.css';

export type MathOperator = '' | '+' | '-' | '*' | '/';

interface CalculatorDisplayProps {
	lValue: number;
	rValue: number;
	operator: MathOperator;
}

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
	}

	return (
		<div className="calculator-display">
			<div className="lValue">{lValue}</div>
			<div className="operator">{operator}</div>
			<div className="rValue">{rValue}</div>
			<div>=</div>
			<div className="result">{result ?? 'Invalid equation'}</div>
		</div>
	);
}

export default CalculatorDisplay;
