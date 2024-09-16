import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';

/*
Pass values into CalculatorDisplay for
	- lValue
	- rValue
	- operator
*/
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
