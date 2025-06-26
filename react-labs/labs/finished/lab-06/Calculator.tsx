import React, { ChangeEvent, useState } from 'react';
import './Calculator.css';
import CalculatorDisplay, { MathOperator } from './CalculatorDisplay';

function Calculator() {
	const [operator, setOperator] = useState<MathOperator>('');
	const [lValue, setLValue] = useState(0);
	const [rValue, setRValue] = useState(0);

	function handleFormUpdate(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		let field = event.target.name;
		let value = Number(event.target.value);

		switch(field) {
			case 'leftValue':
				setLValue(value);
				break;
			case 'rightValue':
				setRValue(value);
				break;
			case 'operator':
				setOperator(event.target.value as MathOperator)
		}
	}

	return (
		<div>
			<div className="mb-1 calculator">
				{/* div>label+input:number */}
				<div className="label">
					<label htmlFor="leftValue">Left Value:</label>
				</div>
				<div>
					<input
						type="number"
						name="leftValue"
						id="leftValue"
						onChange={handleFormUpdate}
						value={lValue}
					/>
				</div>
				<div className="label">
					<label htmlFor="rightValue">Right Value:</label>
				</div>
				<div>
					<input
						type="number"
						name="rightValue"
						id="rightValue"
						onChange={handleFormUpdate}
						value={rValue}
					/>
				</div>

				<div className="label">
					<label htmlFor="choose-operator">Choose an operator:</label>
				</div>
				<div>
					<select
						id="choose-operator"
						name="operator"
						onChange={handleFormUpdate}
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
			<CalculatorDisplay
				lValue={lValue}
				rValue={rValue}
				operator={operator}
			/>
		</div>
	);
}

export default Calculator;
