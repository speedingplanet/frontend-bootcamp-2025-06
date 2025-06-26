import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Calculator from './Calculator';

test('Smoke test', () => {
	expect(1 + 1).toBe(2);
});

test('Accessing Calculator', () => {
	render(<Calculator />);

	// Fails, does not allow partial matches
	// screen.getByText('Choose an');

	// Succeeds, partial matches allowed
	// screen.getByText('Choose an', {exact: false});

	// Succeeds, regular expressions are partial by default
	screen.getByText(/Choose an/);
});

test('Did the operator drop-down render into Calculator?', () => {
	render(<Calculator />);

	// Errors/fails the test if getByLabelText can't find a match
	// let selectList = screen.getByLabelText(/operator/);

	// use an expectation to make sure there are 5 <option> elements under <select>
	// expect(selectList.querySelectorAll('option')).toHaveLength(5)

	// Also fails if there are not exactly 5 option elements under the select list
	expect(screen.getByLabelText(/operator/i).querySelectorAll('option')).toHaveLength(5);
});
