import React, { ChangeEvent, useState } from 'react';
import CalculatorDisplay, { MathOperator } from './CalculatorDisplay';

type BlankableMathOperator = MathOperator | '';

function Calculator() {
	const [operator, setOperator] = useState<BlankableMathOperator>('');

	function handleSelectOperator(event: ChangeEvent<HTMLSelectElement>) {
		// console.log('You selected an operator');
		// console.log(event);
		setOperator(event.target.value as BlankableMathOperator);
	}

	return (
		<div>
			<label htmlFor="">Choose an operator:</label>
			{/* select#operator */}
			<select
				name="operator"
				id="operator"
				onChange={handleSelectOperator}
			>
				<option value="">Choose</option>
				<option value="+">Addition</option>
				<option value="-">Subtraction</option>
				<option value="*">Multiplication</option>
				<option value="/">Division</option>
			</select>

			{/* Checks to see if operator is empty; if not, render CalculatorDisplay.
			If so, render a message (or nothing). TypeScript is happy. */}
			{operator !== '' ? (
				<CalculatorDisplay
					lValue={10}
					rValue={10}
					operator={operator}
				/>
			) : (
				<p>No operator chosen.</p>
			)}

			{/* set the CSS display value to 'block' or 'none' 
    			based on operator's value. TypeScript is unhappy. */}
			{/* 
			<div style={{display: operator ? 'block' : 'none'}}>
				<CalculatorDisplay
					lValue={10}
					rValue={10}
					operator={operator as MathOperator}
				/>
			</div>
			*/}

			{/* Set the HTML hidden attribute to true if operator is 
					an empty string. TypeScript is unhappy.  */}
			{/* 
			<div hidden={operator === ''}>
				<CalculatorDisplay
					lValue={10}
					rValue={10}
					operator={operator as MathOperator}
				/>
			</div>
			 */}
		</div>
	);
}

export default Calculator;
