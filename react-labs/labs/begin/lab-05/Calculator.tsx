import React, { useState } from 'react';
import './Calculator.css';
import CalculatorDisplay from './CalculatorDisplay';

/*
Update the calculator so all the values are user-entered

In the places marked below, add two fields, for the left and right operands of the equation
Each should be tied to their own `useState` call, as well as their own event handler
Pass the state values for the left and the right operands into CalculatorDisplay

Test your code locally to make sure it works.
You can run `npm run test` if you'd like, but there are two tests that are skipped
We will write actual tests for it in the next lab
*/
function Calculator() {
	const [operator, setOperator] = useState('');

	/** @type {React.ChangeEventHandler<HTMLSelectElement>} */
	function handleSwitch(event: React.ChangeEvent<HTMLSelectElement>) {
		setOperator(event.currentTarget.value);
	}

	return (
		<>
			<form className="mb-1">
				<div className="calculator">
					<div className="label">
						<label htmlFor="left-value">Left Value:</label>
					</div>
					<div>
						{/* left operand field goes here */}
						No left value
					</div>
					<div className="label">
						<label htmlFor="right-value">Right Value:</label>
					</div>
					<div>
						{/* right operand field goes here */}
						No right value
					</div>
					<div className="label">
						<label htmlFor="choose-operator">Choose an operator:</label>
					</div>
					<div>
						<select
							id="choose-operator"
							onChange={handleSwitch}
							value={operator}
						>
							<option value="">Choose</option>
							<option value="+">+ Addition</option>
							<option value="-">- Subtraction</option>
							<option value="*">* Multiplication</option>
							<option value="/">/ Division</option>
						</select>
					</div>
				</div>
			</form>
			<CalculatorDisplay
				lValue={2}
				rValue={4}
				operator={operator}
			/>
		</>
	);
}

export default Calculator;
