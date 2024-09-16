import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import Calculator from './Calculator';

test('Loads and displays Calculator', () => {
	render(<Calculator />);

	expect(screen.getByLabelText(/Choose/)).not.toBeNull();
	expect(screen.getByLabelText(/Choose/)).toBeInTheDocument();
});

test.skip('Does not display any equation at start', () => {
	render(<Calculator />);

	expect(screen.getByText(/5/)).not.toBeVisible();
});

test.skip('Displays equation after selecting an operator', async () => {
	const { container } = render(<Calculator />);

	await userEvent.selectOptions(screen.getByLabelText(/Choose/), '+');
	expect(screen.getByText(/^5/)).toBeVisible();

	expect(container.querySelector('.result')?.textContent).toBe('15');
});
