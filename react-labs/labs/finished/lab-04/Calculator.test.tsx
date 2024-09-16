// @ts-check
import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import Calculator from './Calculator';

/*
###################################################################
# Part 3
###################################################################

Write a test that loads and displays Calculator

`render` to render Calculator

You could use `getByLabelText` to see if you could find the label for the drop-down
Don't forget that it takes a TextMatch argument, not just a string
https://testing-library.com/docs/queries/about/#textmatch

Save and make sure it works by having `npm run test` running in a terminal
*/
test('Loads and displays Calculator', () => {
	render(<Calculator />);

	expect(screen.getByLabelText(/Choose/)).not.toBeNull();
	expect(screen.getByLabelText(/Choose/)).toBeInTheDocument();
});

/*
###################################################################
# Part 4
###################################################################

Write a test to make sure that the equation is not displayed initially

You probably want the `toBeVisible` matcher called on your `expect`
*/
test('Does not display any equation at start', () => {
	render(<Calculator />);

	expect(screen.queryByText(/5/)).not.toBeVisible();
});

/*
###################################################################
# Part 5
###################################################################

Write a test to make sure that the equation IS displayed after choosing an
operator

You will need to use `userEvent` with `selectOptions` to trigger a select event
https://testing-library.com/docs/user-event/v13/#selectoptionselement-values-options

Remember that you are selecting based on the 'value' attribute of the <option>

Also remember that events are ASYNCHRONOUS. So label your function `async`
and be sure to `await` userEvent calls

Several different ways you could find out if the equation is displayed.
*/
test('Displays equation after selecting an operator', async () => {
	const { container } = render(<Calculator />);

	await userEvent.selectOptions(screen.getByLabelText(/Choose/), '+');
	expect(screen.queryByText(/^5/)).toBeVisible();

	expect(container.querySelector('.result')?.textContent).toBe('15');
});
