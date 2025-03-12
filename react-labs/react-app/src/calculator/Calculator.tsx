import BasicOperations from './BasicOperations';
import MainDisplay from './MainDisplay';
import './Calc.css';

function Calculator() {
	return (
		<section className="container calc">
			<header className="row mb-2 mt-2 text-center">
				<div className="col">
					<span>Calculator</span>
				</div>
			</header>
			<div className="row main-display mb-2">
				<div className="col">
					<MainDisplay />
				</div>
			</div>
			<div className="row basic-operations">
				<div className="col">
			<BasicOperations />

				</div>
			</div>

		</section>
	);
}

export default Calculator;
