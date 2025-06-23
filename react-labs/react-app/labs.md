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

In `CalculatorDisplay.tsx`: 

Do not display the equation unless the operator is not an empty string

Modify the output so that it does not appear if the operator is an empty string.
Notes about different possibilities:
- A style attribute might work, but what property?
	- visibility?
	- display?
- You could create an additional class to manage visibility instead
- Would the `hidden` attribute work? 

### Lab 4: Testing

#### Part 1

In `CalculatorDisplay.test.tsx`:

Write a test that loads and displays `CalculatorDisplay`

`render` to render `CalculatorDisplay` (pass whatever values you'd like for attributes)

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

`render` to render Calculator

You could use `getByLabelText` to see if you could find the label for the drop-down
Don't forget that it takes a TextMatch argument, not just a string
https://testing-library.com/docs/queries/about/#textmatch

Save and make sure it works by having `npm run test` running in a terminal

#### Part 4

Write a test to make sure that the equation is not displayed initially

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