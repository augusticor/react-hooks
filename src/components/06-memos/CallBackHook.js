import React, { useCallback, useEffect, useState } from 'react';

import '../05-useLayoutEffect/layout.css';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {
	const [counter, setCounter] = useState(10);
	// const increment = () => setCounter(counter + 3);

	const increment = useCallback(
		(cantidad) => {
			setCounter((c) => c + cantidad);
		},
		[setCounter]
	);

	useEffect(() => {
		console.log('Hey useEffect');
	}, [increment]);

	return (
		<div>
			<h1>useCallBack React hook</h1>
			<h5>Counter value: {counter}</h5>
			<hr />

			<ShowIncrement incrementFunction={increment} />
		</div>
	);
};

export default CallBackHook;
