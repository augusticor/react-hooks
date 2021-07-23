import React, { useCallback, useState } from 'react';
import { Hijo } from './Hijo';

import './style.css';

export const Padre = () => {
	const numeros = [1, 2, 4, 6, 8, 10, 20, 30, 40, 50];
	const [valor, setValor] = useState(0);

	const incrementar = useCallback(
		(num) => {
			setValor((v) => v + num);
		},
		[setValor]
	);

	return (
		<>
			<h1>Padre</h1>
			<p> Total: {valor} </p>
			<hr />

			{numeros.map((n) => (
				<Hijo key={n} numero={n} incrementar={incrementar} />
			))}
		</>
	);
};
