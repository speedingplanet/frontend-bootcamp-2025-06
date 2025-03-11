import React, { useState } from 'react';
import './Calculator.css';
import CalculatorDisplay, { MathOperator } from './CalculatorDisplay';

/*
Change the use of state from three separate state values to one state object:

Create variable, `initialState`, which has the properties "operator",
"lValue", and "rValue"

Replace the three `useState` calls with one, using `initialState`
as the initial state

Notice how all three form fields:
- Have a name value that corresponds to the name of a state property
- Are controlled components

Replace the three separate event handlers with one unified
event handler: `handleFormUpdate`.

In `handleFormUpdate`, get the name and the value of the `currentTarget`
and use that to update the state. You will need to pass an entire object
into the setter function, which means merging object literals, probably
with the spread (...) operator.

If you have `npm run test` running in a separate window, it should still pass.
Try out your code in the browser as well. Functionality should stay the same,
even if the underlying implementation is different.
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
