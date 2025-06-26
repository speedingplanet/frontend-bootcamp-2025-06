import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Calculator from './Calculator';
import userEvent from '@testing-library/user-event';

test('Smoke test', () => {
	expect(1 + 1).toBe(2);
});

describe('Calculator tests', () => {
	beforeEach(() => {
		render(<Calculator />);
	});

	test('Accessing Calculator', () => {
		// Fails, does not allow partial matches
		// screen.getByText('Choose an');

		// Succeeds, partial matches allowed
		// screen.getByText('Choose an', {exact: false});

		// Succeeds, regular expressions are partial by default
		screen.getByText(/Choose an/);
	});

	test('Did the operator drop-down render into Calculator?', () => {
		// Errors/fails the test if getByLabelText can't find a match
		// let selectList = screen.getByLabelText(/operator/);

		// use an expectation to make sure there are 5 <option> elements under <select>
		// expect(selectList.querySelectorAll('option')).toHaveLength(5)

		// Also fails if there are not exactly 5 option elements under the select list
		expect(screen.getByLabelText(/operator/i).querySelectorAll('option')).toHaveLength(5);
	});

	test('Displays equation after selecting an operator', async () => {
		let selectList = screen.getByLabelText(/Choose/);
		// Check assumption that the select list starts on "Choose"
		// with a value of ""
		expect(selectList).toHaveValue('');

		// Check assumption that there is no equation displayed
		expect(screen.getByText(/^=/)).not.toBeVisible();

		// After adding a test-id to the results div
		expect(screen.getByTestId('calculator-result')).not.toBeVisible();

		await userEvent.selectOptions(selectList, '+ Addition');

		// Validate that the select list now displays the option
		// with the value "+"
		expect(selectList).toHaveValue('+');

		// After adding a test-id to the results div
		expect(screen.getByTestId('calculator-result')).toBeVisible();

		// The equation should be visible
		expect(screen.getByText(/^=/)).toBeVisible();
	});

	test('Accessing a test-id', () => {
		screen.getByTestId('calculator-display');
	});

	test("Using only test ids, validate that equation is displayed for everything but 'Choose' option", async () => {
		// let { container } = render(<Calculator />);

		// let options = container.querySelectorAll('option');
		let options = screen.getAllByRole('option');
		const operatorSelect = screen.getByLabelText(/operator/i);
		for (let option of options.values()) {
			if (option.textContent === 'Choose') continue;
			await userEvent.selectOptions(operatorSelect, option);
			expect(screen.getByText('=')).toBeVisible();
		}
	});

	test('Enter all the values, then render the equation', async () => {
		/*
		Set up test values
		Set up a user
		Get a reference to the left Value field
		Get a reference to the right Value field
		Enter something into it
		Enter something into it
		Get a reference to the operator drop-down
		Change it to a valid operator
		Check to see if the equation is now visible
		Check to see if the equation is correct
		*/

		let testLeftValue = 20;
		let testRightValue = 10;
		let testOperator = '*';
		let testResult = eval(`${testLeftValue} ${testOperator} ${testRightValue}`);

		let user = userEvent.setup();

		let leftValueField = screen.getByLabelText(/Left/);
		let rightValueField = screen.getByLabelText(/Right/);

		await user.type(leftValueField, String(testLeftValue));
		expect(leftValueField).toHaveValue(testLeftValue);

		await user.type(rightValueField, String(testRightValue));
		expect(rightValueField).toHaveValue(testRightValue);

		// Check assumption that the equation is hidden
		expect(screen.getByText(/=/)).toBeInTheDocument();
		expect(screen.getByText(/=/)).not.toBeVisible()

		const operatorSelect = screen.getByLabelText(/operator/i);
		await user.selectOptions(operatorSelect, '*');

		expect(screen.getByText(/=/)).toBeVisible();
		expect(screen.getByTestId('calculator-result')).toHaveTextContent(testResult);

	});
});

test("Validate that equation is displayed for everything but 'Choose' option", async () => {
	let { container } = render(<Calculator />);

	let options = container.querySelectorAll('option');
	const operatorSelect = screen.getByLabelText(/operator/i);
	for (let option of options.values()) {
		if (option.textContent === 'Choose') continue;
		await userEvent.selectOptions(operatorSelect, option);
		expect(screen.getByText('=')).toBeVisible();
	}
});
