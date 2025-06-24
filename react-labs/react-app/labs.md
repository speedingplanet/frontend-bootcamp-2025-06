# React Labs

## Calculator exercises

### Lab 1: Passing props

Set up the class files by running `npm run begin 1`. 

In CalculatorDisplay.tsx:

Fill in `CalculatorDisplay`. It should take three props:
- `lValue`: the left operand, a number
- `rValue`: the right operand, a number
- `operator`: the operator, i.e. + - * /

Caculate the result based on the operands and the operator

Return a div with the class 'calculator-display'
The div should have separate child divs or spans for the following:
	- `lValue`
	- `operator`
	- `rValue`
	- An equals sign "="
	- The result

In Calculator.tsx:

Pass values into `CalculatorDisplay` for
	- lValue
	- rValue
	- operator

### Lab 1a: 

If you set the type for the `operator` property to a `string` in Lab 1, try building an enum or a union type, instead. 

### Lab 2: State and `useState`

Either continue with your existing file, or set up the class files by running `npm run begin 2`. 

In `Calculator.tsx`: 

Select an operator from a drop-down. Pass the selected operator
into `CalculatorDisplay`. You may have to cast the value from the select field to a new type, depending on your typing for the `operator` prop. 

Use the `useState` hook to initialize the operator

Write an event handler, `handleSwitch` which takes an event as an argument
and calls the setter you configured in your `useState` call

Add a `<select>` list above `CalculatorDisplay`. The options should be
- "Choose" / value is the empty string
- Addition
- Subtraction
- Multiplication
- Division

Don't forget to update the `onChange` and `value` attributes of the select list
to make it a controlled component (controlled by `handleSwitch` above)

Pass the value you used for the operator in your `useState` hook into
`CalculatorDisplay` as the `operator` property.

### Lab 2a: Undefined

We've been using `NaN` to express a failed equation, usually resulting from a bad `operator` prop. Consider letting `result` be `undefined` or a `number`. How could we manage this is the display for `CalculatorDisplay`? Consider using either the logical OR `||` or maybe the nullish coalescing operator `??`. 

### Lab 3: UI Improvements

Either continue with your existing file, or set up the class files by running `npm run begin 3`. 

In `Calculator.tsx`: 

Show `CalculatorDisplay` only once the user selects an operator. Put another way, if the selected option is "Choose", do not show `CalculatorDisplay`. 

How can we hide `CalculatorDisplay`? 
- A style attribute might work, but what property?
	- visibility?
	- display?
	- opacity?
- You could create an additional class to manage visibility instead
- Would the `hidden` attribute work? 

### Lab 4: Testing

#### Part 1

In `CalculatorDisplay.test.tsx`:

Write a test that loads and displays `CalculatorDisplay`

Call `render` to render `CalculatorDisplay` (pass whatever values you'd like for attributes)

Try expecting that something with the text 'Choose' is not null, or
in the document.

Save and make sure it works by having `npm run test` running in a terminal

#### Part 2

In `CalculatorDisplay.test.tsx`:

Add a test to ensure that the display is doing math correctly

Use the `container` feature with `querySelector` against the element with the
class "result" to check the results.

Or get to that information a different way, if you're feeling creative.

#### Part 3

In `Calculator.test.tsx`:

Write a test that loads and displays Calculator

Call `render` to render Calculator

You could use `getByLabelText` to see if you could find the label for the drop-down
Don't forget that it takes a TextMatch argument, not just a string
https://testing-library.com/docs/queries/about/#textmatch

Save and make sure it works by having `npm run test` running in a terminal

#### Part 4

Write a test to make sure that the equation is initially hidden in some way.

You probably want the `toBeVisible` matcher called on your `expect`

#### Part 5

Write a test to make sure that the equation IS displayed after choosing an
operator

You will need to use `userEvent` with `selectOptions` to trigger a select event
https://testing-library.com/docs/user-event/v13/#selectoptionselement-values-options

Remember that you are selecting based on the 'value' attribute of the <option>

Also remember that events are ASYNCHRONOUS. So label your function `async`
and be sure to `await` userEvent calls

Several different ways you could find out if the equation is displayed.

### Lab 5: Text entry

Either continue with your existing file, or set up the class files by running `npm run begin 5`. 

In `Calculator.tsx`: 

Update the calculator so all the values are user-entered. 

Add text or numeric fields as follows:

- One for the `lValue`
- One for the `rValue`

Each should be tied to their own `useState` call, as well as their own event handler for updating the state. 

Pass the state values for the left and the right operands into `CalculatorDisplay`

Test your code locally to make sure it works.

You can run `npm run test` if you'd like, but there are two tests that are skipped
We will write actual tests for it in the next lab


### Lab 6: Testing text entry

Either continue with your existing file, or set up the class files by running `npm run begin 6`. 

In `Calculator.test.tsx`: 

Two sets of changes: one architectural, and one test-based

Architectural:
Wrap the set of tests in a `describe` block.
Use `beforeEach` to render the `Calculator` component before each test.
Remove the call to `render(<Calculator />)` from each individual test.

Test-based:
Go through each of the two skipped tests. Make the following changes:
1) CalculatorDisplay's root element now has a test id of 'calculator-display',
	 so there's no reason to use the `container` anymore
2) Similarly, the .result div under CalculatorDisplay also has a test id
   of 'calculator-result'

Rewrite the test 'Does not display any equation at start' to use the test id.
Rewrite the test 'Displays equation after selecting an operator' to use the test id.

Add a test to set the numeric values, select an operator, and then validate that `CalculatorDisplay` shows the equation and has the correct results.

### Lab 7: Improving state

Either continue with your existing file, or set up the class files by running `npm run begin 7`. 

In `Calculator.tsx`: 

Change the use of state from three separate state values to one state object:

Create a variable, `initialState`, which has the properties "operator",
"lValue", and "rValue"

Replace the three `useState` calls with one, using `initialState`
as the initial state

Notice how all three form fields:
- Have a name value that corresponds to the name of a state property
- Are controlled components

Replace the three separate event handlers with one unified
event handler: `handleFormUpdate`.

In `handleFormUpdate`, get the name and the value of the `currentTarget`
and use that to update the state. You will need to pass an entire object
into the setter function, which means merging object literals, probably
with the spread (...) operator.

If you have `npm run test` running in a separate window, it should still pass.
Try out your code in the browser as well. Functionality should stay the same,
even if the underlying implementation is different.
