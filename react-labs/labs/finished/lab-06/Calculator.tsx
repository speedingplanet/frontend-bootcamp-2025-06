import React, { useState } from 'react';
import './Calculator.css';
import CalculatorDisplay from './CalculatorDisplay';

function Calculator() {
	const [operator, setOperator] = useState('');
	const [lValue, setLValue] = useState(0);
	const [rValue, setRValue] = useState(0);

	/** @type {React.ChangeEventHandler<HTMLSelectElement>} */
	function handleSwitch(event: React.ChangeEvent<HTMLSelectElement>) {
		setOperator(event.currentTarget.value);
	}

	/** @type {React.ChangeEventHandler<HTMLInputElement>} */
	function handleLValue(event: React.ChangeEvent<HTMLInputElement>) {
		setLValue(Number(event.currentTarget.value));
	}

	/** @type {React.ChangeEventHandler<HTMLInputElement>} */
	function handleRValue(event: React.ChangeEvent<HTMLInputElement>) {
		setRValue(Number(event.currentTarget.value));
	}

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
							value={lValue}
							onChange={handleLValue}
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
				operator={operator as MathOperators}
			/>
		</>
	);
}

export default Calculator;
