interface CalculatorButtonProps {
	onButtonClick: (content: string) => void;
}

function CalculatorButton({onButtonClick}: CalculatorButtonProps) {
	return <button onClick={(event) => onButtonClick(event.currentTarget.textContent ?? '')} className="btn btn-sm btn-primary calculator-button">5</button>;
}

export default CalculatorButton;
