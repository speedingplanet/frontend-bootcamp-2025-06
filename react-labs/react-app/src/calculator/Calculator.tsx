import BasicOperations from './BasicOperations';
import MainDisplay from './MainDisplay';
import './Calc.css';
import { useState } from 'react';
import EquationDisplay from './EquationDisplay';

function Calculator() {
	const [buttonValue, setButtonValue] = useState('');

	const handleButtonClick = (content: string) => {
		setButtonValue(content);
	};

	return (
		<section className="calc">
			<header>
				<span>Calculator</span>
			</header>
			<div className="equation-display">
				<EquationDisplay />
			</div>
			<div className="main-display">
				<MainDisplay content={buttonValue} />
			</div>
			<div className="basic-operations">
				<BasicOperations onButtonClick={handleButtonClick} />
			</div>
		</section>
	);
}

export default Calculator;
