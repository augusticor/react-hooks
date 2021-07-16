import React, { useEffect, useState } from 'react';

export const Message = () => {
	const [coordenates, setCoordenates] = useState({ x: 1, y: 1 });

	useEffect(() => {
		console.log('Message -> Componente montado');

		const mouseMove = (event) => {
			setCoordenates({ x: event.x, y: event.y });
			console.log(':O');
		};

		window.addEventListener('mousemove', mouseMove);

		return () => {
			console.log('Message -> Componente desmontado');
			//quitar el event listener
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<div>
			<h3>You're cool !</h3>
			<p>
				x: {coordenates.x} and y:{coordenates.y}
			</p>
		</div>
	);
};
