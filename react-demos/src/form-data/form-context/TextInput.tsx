import React from 'react';
import { nanoid } from 'nanoid';

/**
 *
 * @param {{
 * id?: string,
 * name: string,
 * value: string,
 * updateForm: React.ChangeEventHandler<HTMLInputElement>
 * }} props
 * @returns {JSX.Element}
 */

/**
 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#wrappingmirroring-a-html-element}
 */
interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
	updateForm: React.ChangeEventHandler<HTMLInputElement>;
}

// function TextInput({ id, name, value, updateForm, children, ...props }) {
function TextInput({ id, name, value, updateForm, children, ...props }: TextInputProps) {
	let labelText = children || 'Label goes here';
	if (!id) {
		id = nanoid();
	}

	return (
		<>
			<div>
				<label htmlFor={id}>{labelText}</label>
			</div>
			<div>
				<input
					type="text"
					id={id}
					name={name}
					value={value}
					onChange={updateForm}
					{...props}
				/>
			</div>
		</>
	);
}

export default TextInput;
