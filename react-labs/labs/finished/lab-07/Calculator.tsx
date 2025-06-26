import React, { useState } from 'react';
import './Calculator.css';
import CalculatorDisplay, { MathOperator } from './CalculatorDisplay';

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
		let field = event.target.name;
		let value: string | number = event.target.value;
		if (event.target.name !== 'operator') {
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
