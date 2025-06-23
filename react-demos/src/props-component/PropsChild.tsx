export default function PropsChild(firstName: string) {
	// Old-style concatenation
	// console.log('Hello, ' + firstName);

	// New style using backticks and variable interpolation
	// console.log(`Hello, ${firstName}`);

	// JSX with React
	return <p>Hello, {firstName}</p>
}