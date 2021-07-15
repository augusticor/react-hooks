import { useState } from 'react';

export const useCounter = (initialState = 10) => {
	const [state, setState] = useState(initialState); //El estado inicial o si no 10

	const increment = (incFactor = 1) => {
		setState(state + incFactor);
	};

	const decrement = (decFactor = 1) => {
		setState(state - decFactor);
	};

	const reset = () => {
		setState(initialState);
	};

	return {
		state,
		increment,
		decrement,
		reset,
	};
};
