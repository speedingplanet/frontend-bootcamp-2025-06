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

Add a <select> list above `CalculatorDisplay`. The options should be
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

