interface CalculatorButtonProps {
	buttonValue: string;
	onButtonClick: (content: string) => void;
}

function CalculatorButton({ buttonValue, onButtonClick }: CalculatorButtonProps) {
	return (
		<button
			onClick={(event) => onButtonClick(event.currentTarget.textContent ?? '')}
			className="btn btn-sm btn-primary calculator-button"
		>
			{buttonValue}
		</button>
	);
}

export default CalculatorButton;
