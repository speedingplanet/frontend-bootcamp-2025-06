import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CalculatorDisplay, { MathOperator } from './CalculatorDisplay';

// test(description, function that does the testing)
test('Smoke test', () => {
	/*
	One or more expectations (99% of the time)
	expect(actual value).matcher(expected value)
	expect(add(2, 4)).toEqual(6)
	*/
	expect(1 + 1).toBe(2);
});

test('Access CalculatorDisplay', () => {
	render(
		<CalculatorDisplay
			lValue={5}
			rValue={10}
			operator="*"
		/>
	);

	// getBy... throws an error if unsuccessful
	screen.getByText('*');
});

test('Completes equation successfully', () => {
	let testLValue = 5;
	let testRValue = 10;
	let testOperator: MathOperator = '*';
	let testResult = testLValue * testRValue;

	render(
		<CalculatorDisplay
			lValue={testLValue}
			rValue={testRValue}
			operator={testOperator}
		/>
	);

	// Throws an error if "50" is not found
	screen.getByText(testResult);

	// queryBy... returns null (not an error) when not found
	expect(screen.queryByText(testResult)).not.toBeNull();
	// Similar, but checking to see if a value is in the document
	expect(screen.queryByText(testResult)).toBeInTheDocument();
});

describe('Tests where operator is blank', () => {
	//  Declaring container with a type, but NOT assign a value
	let container: HTMLElement;

	beforeEach(() => {
		let testLValue = 5;
		let testRValue = 10;
		let testOperator: MathOperator = '';
		// let renderResult = render(
		// Destructuring allows renaming on the fly: 
		let {container: innerContainer} = render(
			<CalculatorDisplay
				lValue={testLValue}
				rValue={testRValue}
				operator={testOperator}
			/>
		);
		// container = renderResult.container;
		container = innerContainer;
	});

	test('"Invalid equation" message if no operator selected', () => {
		let testResult = 'Invalid equation';

		screen.getByText(testResult);
		// queryBy... returns null (not an error) when not found
		expect(screen.queryByText(testResult)).not.toBeNull();
		// Similar, but checking to see if a value is in the document
		expect(screen.queryByText(testResult)).toBeInTheDocument();
	});

	test('Should not be visible if the operator is the empty string', () => {
		let component = container.querySelector('.calculator-display');
		expect(component).not.toBeNull();
		expect(component).not.toBeVisible();
	});
});
