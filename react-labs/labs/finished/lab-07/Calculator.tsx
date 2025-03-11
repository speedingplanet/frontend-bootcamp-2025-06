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

interface CalculatorState {
	operator: MathOperator;
	lValue: number;
	rValue: number;
}

const initialState: CalculatorState = {
	operator: '',
	lValue: 0,
	rValue: 0,
};

function Calculator() {
	const [state, setState] = useState(initialState);

	const handleFormUpdate: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (event) => {
		let field = event.currentTarget.name;
		let value: string | number = event.currentTarget.value;
		if (event.currentTarget.name !== 'operator') {
			value = Number(value);
		}
		setState({ ...state, [field]: value });
	};

	return (
		<>
			<form className="mb-1">
				<div className="calculator">
					<div className="label">
						<label htmlFor="left-value">Left Value:</label>
					</div>
					<div>
						<input
							type="number"
							name="lValue"
							id="left-value"
							value={state.lValue}
							onChange={handleFormUpdate}
						/>
					</div>
					<div className="label">
						<label htmlFor="right-value">Right Value:</label>
					</div>
					<div>
						<input
							type="number"
							name="rValue"
							id="right-value"
							value={state.rValue}
							onChange={handleFormUpdate}
						/>
					</div>
					<div className="label">
						<label htmlFor="choose-operator">Choose an operator:</label>
					</div>
					<div>
						<select
							id="choose-operator"
							name="operator"
							value={state.operator}
							onChange={handleFormUpdate}
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
				lValue={state.lValue}
				rValue={state.rValue}
				operator={state.operator as MathOperator}
			/>
		</>
	);
}

export default Calculator;
