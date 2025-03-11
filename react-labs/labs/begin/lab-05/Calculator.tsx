import React, { useState } from 'react';
import './Calculator.css';
import CalculatorDisplay, { MathOperator } from './CalculatorDisplay';

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
	const [operator, setOperator] = useState<MathOperator>('');

	const handleSwitch: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		setOperator(event.currentTarget.value as MathOperator);
	};

	return (
		<div>
			<div className="mb-1">
				<label htmlFor="choose-operator">Choose an operator:</label>
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
			<CalculatorDisplay
				lValue={5}
				rValue={10}
				operator={operator}
			/>
		</div>
	);
}

export default Calculator;
