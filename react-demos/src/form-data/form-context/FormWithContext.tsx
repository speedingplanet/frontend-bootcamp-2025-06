import React, { useState, createContext } from 'react';
import FormDataDisplay from '../FormDataDisplay';
import TextInput from './TextInput';

interface FormState {
	[field: string]: string;
}

const FormContext = createContext<FormState | null>(null);

const initialState = {};

function FormWithContext() {
	const [formState, setFormState] = useState<FormState>(initialState);

	function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>) {
		let field = event.currentTarget.name;
		let value = event.currentTarget.value;

		let nextState = { ...formState };
		nextState[field] = value;

		setFormState(nextState);
	}

	return (
		<FormContext.Provider value={{}}>
			<h3>Form with context</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<TextInput
							name="firstName"
							updateForm={handleFormUpdate}
							value="test"
						>
							First Name:
						</TextInput>
						{/* Last Name */}
						<TextInput
							name="lastName"
							updateForm={handleFormUpdate}
							value="test"
						>
							Last Name:
						</TextInput>
						{/* City */}
						<TextInput
							name="city"
							updateForm={handleFormUpdate}
							value="test"
						>
							City:
						</TextInput>
						{/* State */}
						<TextInput
							name="state"
							updateForm={handleFormUpdate}
							value="test"
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
