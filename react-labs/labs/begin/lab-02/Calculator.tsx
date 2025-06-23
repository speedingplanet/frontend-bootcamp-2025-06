import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';

function Calculator() {
	return (
		<div>
			<CalculatorDisplay
				lValue={5}
				rValue={10}
				operator="+"
			/>
		</div>
	);
}

export default Calculator;
