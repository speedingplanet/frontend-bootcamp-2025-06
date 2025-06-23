// @ts-check
import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CalculatorDisplay from './CalculatorDisplay';

test('Smoke test', () => {
	expect(1 + 1).toBe(2);
});

/*
Part 1
*/
test('Loads and displays CalculatorDisplay', () => {
	render(
		<CalculatorDisplay
			lValue={2}
			rValue={3}
			operator="+"
		/>
	);

	expect(screen.getByText('+')).not.toBeNull();
	expect(screen.getByText('+')).toBeInTheDocument();
});

/*
Part 2
*/
test('Adds correctly', () => {
	const { container } = render(
		<CalculatorDisplay
			lValue={2}
			rValue={3}
			operator="+"
		/>
	);

	expect(container.querySelector('.result')?.textContent).toBe('5');
});
