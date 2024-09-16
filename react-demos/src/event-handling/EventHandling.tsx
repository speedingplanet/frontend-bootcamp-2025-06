import React, { useState } from 'react';

function EventHandling() {
	/*
	let array = useState(0);

	// The value
	let counter = array[0];

	// The setter/mutator for changing the value
	let setCounter = array[1];
	*/
	let [counter, setCounter] = useState(10);
	let [yesNoValue, setYesNoValue] = useState('');
	let [message, setMessage] = useState('');

	function handleClick() {
		setMessage('You clicked on the button!');
	}

	return (
		<section className="row">
			<div className="col">
				<h2>Event handling demo</h2>

				{/* button.btn.btn-primary */}
				<p>
					Click on the button:&nbsp;
					<button
						className="btn btn-primary"
						onClick={handleClick}
					>
						Click
					</button>
				</p>
				<p>
					In-line handler:
					<button
						className="btn btn-secondary"
						onClick={() => setMessage('You clicked on the in-line button')}
					>
						Click
					</button>
				</p>
				<div>
					<button
						className="btn btn-warning"
						onClick={() => setCounter(counter + 1)}
					>
						Increment
					</button>
					<p>Value: {counter}</p>
				</div>
				<div>
					{/* (input:radio+label)*2 */}
					<input
						type="radio"
						name="flipper"
						id="yes"
						value="yes"
						onChange={(e) => {
							setYesNoValue(e.currentTarget.value);
						}}
						checked={yesNoValue === 'yes'}
					/>
					&nbsp;
					<label htmlFor="yes">Yes</label>
					<br />
					<input
						type="radio"
						name="flipper"
						id="no"
						value="no"
						onChange={(e) => setYesNoValue(e.currentTarget.value)}
						checked={yesNoValue === 'no'}
					/>
					&nbsp;
					<label htmlFor="no">No</label>
					<p>You chose {yesNoValue}</p>
					<p>
						<button
							className="btn btn-danger"
							onClick={() => setYesNoValue('no')}
						>
							Flip to No
						</button>
					</p>
				</div>
			</div>
			<div className="col">
				<p>{message}</p>
			</div>
		</section>
	);
}

export default EventHandling;
