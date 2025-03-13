import { ButtonDescriptor } from './calculator-types';
import classNames from 'classnames';

interface CalculatorButtonProps extends ButtonDescriptor {
	onButtonClick: (button: ButtonDescriptor) => void;
}

function CalculatorButton({ label, value, className, onButtonClick }: CalculatorButtonProps) {
	return (
		<button
			onClick={() => onButtonClick({ label, value, className })}
			className={classNames('calculator-button', className)}
			value={value}
		>
			{label}
		</button>
	);
}

export default CalculatorButton;
