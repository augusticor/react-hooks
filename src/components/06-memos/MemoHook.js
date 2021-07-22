import React, { useLayoutEffect, useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

import { heavyProcess } from '../../helpers/heavyProcess';

import '../05-useLayoutEffect/layout.css';

export const MemoHook = () => {
	const { state: counter, increment } = useCounter(100);
	const [show, setShow] = useState(true);
	const [state, setState] = useState(0);

	const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

	useLayoutEffect(() => {
		setState((s) => s + 1);
	}, [memoHeavyProcess]);

	return (
		<>
			<h1>useMemo React Hook</h1>
			<hr />
			<h3>Counter value : {counter}</h3>

			<p># of re renders of component : {state}</p>
			<p>{memoHeavyProcess}</p>

			<button className='btn btn-outline-primary margin-right' onClick={() => increment()}>
				+1
			</button>

			<button className='btn btn-warning' onClick={() => setShow(!show)}>
				Show/hide {JSON.stringify(show).toUpperCase()}
			</button>
		</>
	);
};
