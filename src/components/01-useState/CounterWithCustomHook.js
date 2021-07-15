import React from 'react';
import { useCounter } from '../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
	// Uso del custom hook de counter
	const { state: counter, increment, decrement, reset } = useCounter(56);

	return (
		<>
			<h1>Counter with custom hook: {counter}</h1>
			<hr />

			<button className='btn btn-info btn-outline-dark' onClick={() => increment(2)}>
				+ 1
			</button>
			<button className='btn btn-info btn-outline-dark' onClick={() => decrement(3)}>
				- 1
			</button>
			<button className='btn btn-reset btn-warning btn-outline-dark' onClick={reset}>
				Reset Counter
			</button>
		</>
	);
};
