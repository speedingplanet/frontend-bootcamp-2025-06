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
	const [lValue, setLValue] = useState(0);
	const [rValue, setRValue] = useState(0);

	const handleSwitch: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		setOperator(event.currentTarget.value as MathOperator);
	};

	const handleLValue: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setLValue(Number(event.currentTarget.value));
	};

	const handleRValue: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setRValue(Number(event.currentTarget.value));
	};

	return (
		<>
			<form className="mb-1">
				<div className="calculator">
					<div className="label">
						<label htmlFor="left-value">Left Value:</label>
					</div>
					<div>
						{/* left operand field goes here */}
						<input
							type="number"
							name="lValue"
							id="left-value"
							value={lValue}
							onChange={handleLValue}
						/>
					</div>
					<div className="label">
						<label htmlFor="right-value">Right Value:</label>
					</div>
					<div>
						{/* right operand field goes here */}
						<input
							type="number"
							name="rValue"
							id="right-value"
							value={rValue}
							onChange={handleRValue}
						/>
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
				lValue={lValue}
				rValue={rValue}
				operator={operator as MathOperator}
			/>
		</>
	);
}

export default Calculator;
