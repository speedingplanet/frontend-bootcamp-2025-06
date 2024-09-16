import React from 'react';
import { expect, test, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import Calculator from './Calculator';

/*
Two sets of changes: one architectural, and one test-based

Architectural:
Wrap the set of tests below in a `describe` block.
Use `beforeEach` to render the `Calculator` component before each test
Remove the call to `render(<Calculator />)` from each individual test

Test-based:
Go through each of the two skipped tests. Make the following changes:
1) CalculatorDisplay's root element now has a test id of 'calculator-display',
	 so there's no reason to use the `container` anymore
2) Similarly, the .result div under CalculatorDisplay also has a test id
   of 'calculator-result'

Rewrite the test 'Does not display any equation at start' to use the test id.
Rewrite the test 'Displays equation after selecting an operator' to use the test id.

Add a test to set the numeric values, select an operator, and then validate that
CalculatorDisplay shows the equation and has the correct results.

*/

describe('Testing Calculator', () => {
	beforeEach(() => {
		render(<Calculator />);
	});

	test('Loads and displays Calculator', () => {
		expect(screen.getByLabelText(/Choose/)).not.toBeNull();
		expect(screen.getByLabelText(/Choose/)).toBeInTheDocument();
	});

	test('Does not display any equation at start', () => {
		expect(screen.getByTestId('calculator-display')).not.toBeVisible();
	});

	test('Displays equation after selecting an operator', async () => {
		await userEvent.selectOptions(screen.getByLabelText(/Choose/), '+');
		expect(screen.getByTestId('calculator-display')).toBeVisible();
	});

	test('Displays equation after setting numeric values', async () => {
		let testLValue = 5;
		let testRValue = 7;
		// Pass values as strings, because userEvent.type takes a string as a second argument
		await userEvent.type(screen.getByLabelText(/Left/), testLValue + '');
		await userEvent.type(screen.getByLabelText(/Right/), testRValue + '');
		await userEvent.selectOptions(screen.getByLabelText(/Choose/), '+');

		expect(screen.getByTestId('calculator-display')).toBeVisible();
		expect(screen.getByTestId('calculator-result')).toHaveTextContent(testLValue + testRValue);
	});
});
