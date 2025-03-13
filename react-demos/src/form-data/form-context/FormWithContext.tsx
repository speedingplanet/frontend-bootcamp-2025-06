import React, { useState, createContext } from 'react';
import FormDataDisplay from '../FormDataDisplay';
import TextInput from './TextInput';

/*
interface FormState {
	[field: string]: string;
}
*/

export type FormState = typeof initialState;

export const FormContext = createContext<FormState | null>(null);

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

function FormWithContext() {
	const [formState, setFormState] = useState<FormState>(initialState);

	function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>) {
		let field = event.currentTarget.name;
		let value = event.currentTarget.value;

		let nextState = { ...formState };
		nextState[field as keyof FormState] = value;

		setFormState(nextState);
	}

	return (
		<FormContext.Provider value={formState}>
			<h3>Form with context</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<TextInput
							name="firstName"
							updateForm={handleFormUpdate}
						>
							First Name:
						</TextInput>
						{/* Last Name */}
						<TextInput
							name="lastName"
							updateForm={handleFormUpdate}
						>
							Last Name:
						</TextInput>
						{/* City */}
						<TextInput
							name="city"
							updateForm={handleFormUpdate}
						>
							City:
						</TextInput>
						{/* State */}
						<TextInput
							name="state"
							updateForm={handleFormUpdate}
						>
							State:
						</TextInput>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={formState.firstName}
						lastName={formState.lastName}
						city={formState.city}
						state={formState.state}
					/>
				</div>
			</div>
		</FormContext.Provider>
	);
}

export default FormWithContext;
