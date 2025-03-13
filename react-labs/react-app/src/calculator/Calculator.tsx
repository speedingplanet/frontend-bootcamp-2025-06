import BasicOperations from './BasicOperations';
import MainDisplay from './MainDisplay';
import './Calc.css';
import EquationDisplay from './EquationDisplay';
import ScientificOperations from './ScientificOperations';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let operators = ['÷', '✕', '-', '+', '='];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let specialCases = ['AC', '+/-', '%'];

function Calculator() {
	const [showScience, setShowScience] = useState(true);

	const handleButtonClick = (value: string) => {
		console.log(value);

		/*
		if value is 'AC', clean both display and equation history

		if display is empty and value is an operator, display becomes
		['0', operator]

		if display is empty and value is a number, display becomes
		[number]

		All of the below assume display is not empty

		if value is a number, display becomes
		['previousNumber+value']
		
		if value is an operator, display becomes
		[previousNumber, operator]

		if value is a decimal point, scan last element
		of display for a decimal point. If one is present, ignore
		[previous.Number] -> ignore

		if not, add, and continue with subsequent numbers
		[previousNumber.]

		if last value is zero and value is zero, 
		do not add UNLESS last value contains a decimal point
		0 -> press 0 -> do not add
		0. -> press 0 -> add
		0.00 -> press 0 -> add

		What about %?
		What about +/-?
		What about backspace (occurs mid-equation)?
		What about keyboard input? 
		What about the view toggle button?
		*/
	};

	return (
		<>
			<section className="calc">
				<header>
					<span>Calculator</span>
				</header>
				<div className="equation-display">
					<EquationDisplay />
				</div>
				<div className="main-display">
					<MainDisplay content={'placeholder'} />
				</div>
				<div className="operations-container">
					<div
						className="scientific-operations"
						hidden={!showScience}
					>
						<ScientificOperations onButtonClick={handleButtonClick} />
					</div>
					<div className="basic-operations">
						<BasicOperations onButtonClick={handleButtonClick} />
					</div>
				</div>
			</section>
			<div style={{ marginTop: '1em' }}>
				<button onClick={() => setShowScience(!showScience)}>Toggle Scientific view</button>
			</div>
		</>
	);
}

export default Calculator;
