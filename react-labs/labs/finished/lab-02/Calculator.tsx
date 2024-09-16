import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';

/*
Select an operator from a drop-down. Pass the selected operator
into CalculatorDisplay.

Use the useState hook to initialize the operator

Write an event handler, `handleSwitch` which takes an event as an argument
and calls the setter you configured in your useState call

Add a <select> list above CalculatorDisplay. The options should be
- "Choose" / value is the empty string
- Addition
- Subtraction
- Multiplication
- Division

Don't forget to update the `onChange` and `value` attributes of the select list
to make it a controlled component (controlled by `handleSwitch` above)

Pass the value you used for the operator in your useState hook into
CalculatorDisplay as the `operator` property
*/

function Calculator() {
	const [operator, setOperator] = useState('');

	/** @type {React.ChangeEventHandler<HTMLSelectElement>} */
	function handleSwitch(event) {
		setOperator(event.currentTarget.value);
	}

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
