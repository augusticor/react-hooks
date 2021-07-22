import React from 'react';

export const HeaderTwo = React.memo(({ value }) => {
	console.log('Que gastadera de memoria');
	return <h2>{value}</h2>;
});
