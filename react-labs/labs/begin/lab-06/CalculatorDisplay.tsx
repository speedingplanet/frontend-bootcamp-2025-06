import React from 'react';
import './CalculatorDisplay.css';

export type MathOperator = '' | '+' | '-' | '*' | '/';

interface CalculatorDisplayProps {
	lValue: number;
	rValue: number;
	operator: MathOperator;
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
	}

	return (
		<div
			className="calculator-display"
			style={{ visibility: operator === '' ? 'hidden' : 'visible' }}
			data-testid="calculator-display"
		>
			<div className="lValue">{lValue}</div>
			<div className="operator">{operator}</div>
			<div className="rValue">{rValue}</div>
			<div>=</div>
			<div
				className="result"
				data-testid="calculator-result"
			>
				{result ?? 'Invalid equation'}
			</div>
		</div>
	);
}

export default CalculatorDisplay;
