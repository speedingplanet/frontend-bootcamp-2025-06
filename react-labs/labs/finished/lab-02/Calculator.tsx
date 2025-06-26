import React, { useState } from 'react';
import CalculatorDisplay, { MathOperator } from './CalculatorDisplay';

function Calculator() {
	const [operator, setOperator] = useState('');

	function handleSwitch(event: React.ChangeEvent<HTMLSelectElement>) {
		setOperator(event.target.value);
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
				operator={operator as MathOperator}
			/>
		</div>
	);
}

export default Calculator;
