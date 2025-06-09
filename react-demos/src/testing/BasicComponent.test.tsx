import React from 'react';
import { it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicComponent from './BasicComponent';

it('Smoke test (it)', () => {
	/*
	expect(actual).toBe(expected)
	expect(code under test).toBe(what we think it will be)
	We expect a value to match some condition
	And throw an error if that's not true
	*/
	expect(1 + 1).toBe(2);
});

test('Smoke test (test)', () => {
	expect(1 + 1).toBe(2);
});

test('Checking comment length', () => {
	let testString = 'The quick brown fox jumped over the lazy dog';
	let words = testString.split(' ');
	expect(words.length).toBeLessThan(30);
	expect(words.length).toBeGreaterThanOrEqual(2);
});

it('should render the BasicComponent component', () => {
	render(<BasicComponent />);

	/*
	Find an element by its text, error/failure if not found
	screen.getByText('Apples')
	expect().not -> Negates the next matcher
	toBeNull() -> Checks for nullity
	*/

	expect(screen.getByText('Apples')).not.toBeNull();
	expect(screen.getByText('Bananas')).toBeInTheDocument();
});

it('should access the component in several ways', () => {
	render(<BasicComponent />);

	// Plain text, must be exact, case sensitive
	expect(screen.getByText('Apples')).not.toBeNull();

	// Inexact match, and case-insensitive
	expect(screen.getByText('app', { exact: false })).not.toBeNull();

	// Regular expression match (currently matching the behavior of exact)
	expect(screen.getByText(/nan/i));
});

/*
	This may be necessary sometimes, but it goes against the philosophy of
	testing library
*/
it('should allow access to the underlying DOM', () => {
	// The nearest element wrapper around this component
	const { container } = render(<BasicComponent />);

	let secondListItem = container.querySelector('li:nth-child(2)');
	expect(secondListItem).not.toBeNull();
	expect(secondListItem!.textContent).toEqual('Bananas');
});

it('should allow access via a test id', () => {
	render(<BasicComponent />);
	expect(screen.getByTestId('oranges')).not.toBeNull();
});

it("should access a form field via the field's label", () => {
	render(<BasicComponent />);
	let formField = screen.getByLabelText(/favorite/i);
	expect(formField).toBeInTheDocument();
	expect(formField).toBeVisible();
});

it('should compare snapshots', () => {
	const { asFragment } = render(<BasicComponent />);
	expect(asFragment()).toMatchSnapshot();
});

it('should respond to content typed into a form field', async () => {
	// Setup
	const user = userEvent.setup();

	const { container } = render(<BasicComponent />);
	let formField = screen.getByLabelText(/favorite/i);
	expect(formField).toHaveValue('');

	let lastItem = container.querySelector('li:last-child');
	expect(lastItem).toHaveTextContent('');

	// Interaction
	let fruit = 'Lemons';
	await user.type(formField, fruit);
	expect(formField).toHaveValue(fruit);
	expect(lastItem).toHaveTextContent(fruit);
	expect(screen.getByText(fruit)).toBeInTheDocument();
});
