import CalculatorButton from './CalculatorButton';

interface BasicOperationsProps {
	onButtonClick: (content: string) => void;
}

export interface ButtonDescriptor {
	label: string;
	value?: string;
	className?: string;
}

let buttons: Array<ButtonDescriptor> = [
	{ label: 'AC' },
	{ label: '+/-' },
	{ label: '%' },
	{ label: '÷' },
	{ label: '7' },
	{ label: '8' },
	{ label: '9' },
	{ label: '✕' },
	{ label: '4' },
	{ label: '5' },
	{ label: '6' },
	{ label: '-' },
	{ label: '1' },
	{ label: '2' },
	{ label: '3' },
	{ label: '+' },
	{ label: '0' },
	{ label: '⌨' },
	{ label: '.' },
	{ label: '=' },
];

function BasicOperations({ onButtonClick }: BasicOperationsProps) {
	console.log(buttons.toReversed())
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
