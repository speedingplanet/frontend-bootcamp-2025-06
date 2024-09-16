import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';

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
