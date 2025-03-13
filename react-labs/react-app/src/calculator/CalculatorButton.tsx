import { ButtonDescriptor } from './calculator-types';
import classNames from 'classnames';

interface CalculatorButtonProps extends ButtonDescriptor {
	onButtonClick: (content: string) => void;
}

function CalculatorButton({ label, value, className, onButtonClick }: CalculatorButtonProps) {
	return (
		<button
			onClick={(event) => onButtonClick(event.currentTarget.textContent ?? '')}
			className={classNames('calculator-button', className)}
		>
			{label}
		</button>
	);
}

export default CalculatorButton;
