interface CalculatorButtonProps {
	label: string;
	onButtonClick: (content: string) => void;
}

function CalculatorButton({ label, onButtonClick }: CalculatorButtonProps) {
	return (
		<button
			onClick={(event) => onButtonClick(event.currentTarget.textContent ?? '')}
			className="calculator-button"
		>
			{label}
		</button>
	);
}

export default CalculatorButton;
