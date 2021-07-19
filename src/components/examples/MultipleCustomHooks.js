import React from 'react';

import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

import './styles.css';

const MultipleCustomHooks = () => {
	const { state: counter, increment, reset } = useCounter(1);

	const apiUrl = `https://www.breakingbadapi.com/api/quotes/${counter}`;

	const { loading, data } = useFetch(apiUrl);

	// !null = true, !!null = false
	const { author, quote, series } = !!data && data[0];

	return (
		<div>
			<h1>BreakingBad Quotes useFetchCustomHook</h1>
			<hr />

			{loading ? (
				<div className='alert alert-info text-center'>Loading ...</div>
			) : (
				<blockquote className='blockquote text-center'>
					<p className='mb-3'>{quote}</p>
					<footer className='blockquote-footer'>
						{author}, in
						<cite title='Source Title'> {series} series</cite>
					</footer>
				</blockquote>
			)}

			{counter > 101 && reset()}

			{!loading && (
				<button className='btn btn-outline-primary' onClick={() => increment()}>
					Next awesome quote
				</button>
			)}
		</div>
	);
};

export default MultipleCustomHooks;
