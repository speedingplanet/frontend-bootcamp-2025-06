import CalculatorButton from './CalculatorButton';

interface BasicOperationsProps {
	onButtonClick: (content: string) => void;
}

function BasicOperations({onButtonClick}: BasicOperationsProps) {
	return (
		<div>
			<div>BasicOperations</div>
			<CalculatorButton onButtonClick={onButtonClick}/>
		</div>
	);
}

export default BasicOperations;
