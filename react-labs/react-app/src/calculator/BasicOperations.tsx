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
	{ label: '0' },
	{ label: '⌨' },
	{ label: '.' },
	{ label: '=', className: 'basic-operator' },
];

function BasicOperations({ onButtonClick }: BasicOperationsProps) {
	console.log(buttons.toReversed());
	return (
		<>
			{buttons.map((button) => (
				<div>
					<CalculatorButton
						key={button.label}
						{...button}
						onButtonClick={onButtonClick}
					/>
				</div>
			))}
		</>
	);
}

export default BasicOperations;
