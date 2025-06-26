import React, { useState } from 'react';
import FormDataDisplay from './FormDataDisplay';

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

export type FormState = typeof initialState;

function FormDataSingleStateObject() {
	const [formState, setFormState] = useState<FormState>(initialState);

	function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>) {
		// If `name` is typed as a string, it will cause errors at `nextState[field]`
		let field = event.target.name as keyof FormState;
		let value = event.target.value;

		let nextState: FormState = { ...formState };
		nextState[field] = value;

		setFormState(nextState);
	}

	return (
		<>
			<h3>Single State Object</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<div>
							<label htmlFor="first-name">First Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="firstName"
								id="first-name"
								value={formState.firstName}
								onChange={handleFormUpdate}
							/>
						</div>
						{/* Last Name */}
						<div>
							<label htmlFor="last-name">Last Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="lastName"
								id="last-name"
								value={formState.lastName}
								onChange={handleFormUpdate}
							/>
						</div>
						{/* City */}
						<div>
							<label htmlFor="city">City: </label>
						</div>
						<div>
							<input
								type="text"
								name="city"
								id="city"
								value={formState.city}
								onChange={handleFormUpdate}
							/>
						</div>
						{/* State */}
						<div>
							<label htmlFor="state">State: </label>
						</div>
						<div>
							<input
								type="text"
								name="state"
								id="state"
								value={formState.state}
								onChange={handleFormUpdate}
							/>
						</div>
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
		</>
	);
}

export default FormDataSingleStateObject;
