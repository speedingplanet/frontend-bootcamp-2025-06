import React from 'react';
import { expect, test, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import Calculator from './Calculator';

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

		await userEvent.type(screen.getByLabelText(/Left/), testLValue + '');
		await userEvent.type(screen.getByLabelText(/Right/), testRValue + '');
		await userEvent.selectOptions(screen.getByLabelText(/Choose/), '+');

		expect(screen.getByTestId('calculator-display')).toBeVisible();
		expect(screen.getByTestId('calculator-result')).toHaveTextContent(testLValue + testRValue);
	});
});
