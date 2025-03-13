import { ButtonDescriptor } from './calculator-types';
import CalculatorButton from './CalculatorButton';

interface BasicOperationsProps {
	onButtonClick: (content: string) => void;
}

let buttons: Array<ButtonDescriptor> = [
	{ label: 'AC', className: 'basic-header' },
	{ label: '+/-', className: 'basic-header' },
	{ label: '%', className: 'basic-header' },
	{ label: '÷', className: 'basic-operator' },
	{ label: '7' },
	{ label: '8' },
	{ label: '9' },
	{ label: '✕', className: 'basic-operator' },
	{ label: '4' },
	{ label: '5' },
	{ label: '6' },
	{ label: '-', className: 'basic-operator' },
	{ label: '1' },
	{ label: '2' },
	{ label: '3' },
	{ label: '+', className: 'basic-operator' },
	{ label: '⌨' },
	{ label: '0' },
	{ label: '.' },
	{ label: '=', className: 'basic-operator' },
];

function BasicOperations({ onButtonClick }: BasicOperationsProps) {
	return (
		<>
			{buttons.map((button) => (
				<div key={button.label}>
					<CalculatorButton
						{...button}
						onButtonClick={onButtonClick}
					/>
				</div>
			))}
		</>
	);
}

export default BasicOperations;
