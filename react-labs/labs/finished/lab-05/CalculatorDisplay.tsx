import React from 'react';
import type * as CSS from 'csstype';
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

	/*
	let visibilityValue: CSS.Property.Visibility;
	if (operator === '') {
		visibilityValue = 'hidden'
	} else {
		visibilityValue = 'visible'
	}
		*/

	let visibility: CSS.Property.Visibility;
	if (operator === '') {
		visibility = 'hidden'
	} else {
		visibility = 'visible'
	}

	return (
		<div
			className="calculator-display"
			style={{ visibility }}
		>
			<div className="lValue">{lValue}</div>
			<div className="operator">{operator}</div>
			<div className="rValue">{rValue}</div>
			<div>=</div>
			<div className="result">{result ?? 'Invalid equation'}</div>
		</div>
	);
}

export default CalculatorDisplay;
