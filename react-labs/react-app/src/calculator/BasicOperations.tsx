import CalculatorButton from './CalculatorButton';

interface BasicOperationsProps {
	onButtonClick: (content: string) => void;
}

let buttons = ['AC', '+/-', '%', '÷', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function BasicOperations({ onButtonClick }: BasicOperationsProps) {
	return (
		<div>
			<div>BasicOperations</div>
			{buttons.map((value, index) => (
				<CalculatorButton
					key={index}
					buttonValue={value}
					onButtonClick={onButtonClick}
				/>
			))}
		</div>
	);
}

export default BasicOperations;
