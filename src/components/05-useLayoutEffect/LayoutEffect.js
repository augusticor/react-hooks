import React, { useLayoutEffect, useRef, useState } from 'react';

import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

import './layout.css';

const LayoutEffect = () => {
	const { state: counter, increment, reset } = useCounter(1);

	const apiUrl = `https://www.breakingbadapi.com/api/quotes/${counter}`;

	const { loading, data } = useFetch(apiUrl);

	const { quote } = !!data && data[0];

	const paragraph = useRef();
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		//.getBoundingClientRect() devuelve la posicion, ancho, alto, ...
		console.log('Hey useLayoutEffect: ', paragraph.current.getBoundingClientRect());
		setBoxSize(paragraph.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>UseLayoutEffect React Hook</h1>
			<hr />

			<blockquote className='blockquote text-center'>
				<p ref={paragraph} className='mb-3'>
					{quote}
				</p>
			</blockquote>

			{counter > 101 && reset()}

			{!loading && (
				<button className='btn btn-outline-primary' onClick={() => increment()}>
					Next awesome quote
				</button>
			)}

			<pre>{JSON.stringify(boxSize, null, 4)}</pre>
		</div>
	);
};

export default LayoutEffect;
