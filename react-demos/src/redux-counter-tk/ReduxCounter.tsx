import React from 'react';
import Counter from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, CounterState } from './counter-slice';

const BetterReduxCounter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state: CounterState) => state.counter);

	const dispatchIncrement = () => {
		dispatch(increment());
	};

	return (
		<Counter
			increment={dispatchIncrement}
			decrement={() => dispatch(decrement())}
			value={count}
		/>
	);
};

export default BetterReduxCounter;
