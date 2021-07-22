import React, { useLayoutEffect, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

import { HeaderTwo } from './HeaderTwo';

import '../05-useLayoutEffect/layout.css';

export const Memorize = () => {
	const { state: counter, increment } = useCounter(0);
	const { state: rerenderCounter, increment: rerender } = useCounter(0);

	const [show, setShow] = useState(true);

	useLayoutEffect(() => {
		setTimeout(() => {
			document.getElementById('headertwo').classList.add('blink_me');
		}, 800);

		return () => document.getElementById('headertwo').classList.remove('blink_me');
	}, [counter]);

	return (
		<>
			<h1>Memo - Memorize</h1>
			<hr />

			<h4>Counter current value:</h4>
			<div id='headertwo'>
				<HeaderTwo value={counter} />
			</div>

			<button
				className='btn btn-outline-primary margin-right'
				onClick={() => {
					increment(5);
					rerender();
				}}
			>
				Increment + 5
			</button>

			<button className='btn btn-warning' onClick={() => setShow(!show)}>
				Toggle ?? {JSON.stringify(show).toUpperCase()}
			</button>

			<h6 className='margin-top'>
				{`<HeaderTwo/>`} component rerender counter :: <strong>{rerenderCounter}</strong>
			</h6>
		</>
	);
};
