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
{label: 'AC'},
{label: '+/-'},
{label: '%'},
{label: '÷'},
{label: '0'},
{label: '1'},
{label: '2'},
{label: '3'},
{label: '4'},
{label: '5'},
{label: '6'},
{label: '7'},
{label: '8'},
{label: '9'},
];

function BasicOperations({ onButtonClick }: BasicOperationsProps) {
	return (
		<div>
			<div>BasicOperations</div>
			{buttons.map((button, index) => (
				<CalculatorButton
					key={button.label}
					{...button}
					onButtonClick={onButtonClick}
				/>
			))}
		</div>
	);
}

export default BasicOperations;
