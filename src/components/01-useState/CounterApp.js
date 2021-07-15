import React, { useState } from 'react';

import './counter.css';

const CounterApp = () => {
	const [state, setState] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
		counter4: 40,
		counter5: 50,
		counter6: 60,
	});

	const { counter1, counter2, counter3, counter6 } = state;

	return (
		<>
			<h1>Counter 3value: {counter1}</h1>
			<h2>Counter 4 value: {counter2}</h2>
			<h3>Counter 5 value: {counter3}</h3>
			<h4>Counter 6 value: {counter6}</h4>
			<hr />
			<button
				className='btn btn-primary'
				onClick={() => {
					setState({
						...state,
						counter1: counter1 + 1,
						counter6: counter6 - 1,
					});
				}}
			>
				Change !!
			</button>
		</>
	);
};

export default CounterApp;
