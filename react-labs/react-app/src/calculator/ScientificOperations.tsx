import { ButtonDescriptor } from './calculator-types';
import CalculatorButton from './CalculatorButton';

interface ScientificOperationsProps {
	onButtonClick: (content: string) => void;
}

let buttons: Array<ButtonDescriptor> = [
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
	{ label: 'A' },
];

function ScientificOperations({ onButtonClick }: ScientificOperationsProps) {
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

export default ScientificOperations;
