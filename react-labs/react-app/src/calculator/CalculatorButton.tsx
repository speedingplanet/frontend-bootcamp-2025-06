interface CalculatorButtonProps {
	label: string;
	onButtonClick: (content: string) => void;
}

function CalculatorButton({ label, onButtonClick }: CalculatorButtonProps) {
	return (
		<button
			onClick={(event) => onButtonClick(event.currentTarget.textContent ?? '')}
			className="btn btn-sm btn-primary calculator-button"
		>
			{label}
		</button>
	);
}

export default CalculatorButton;
