import React, { useReducer } from 'react';

import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [
	{
		id: new Date().getTime(),
		desc: 'Learn React',
		done: false,
	},
];

const TodoApp = () => {
	const [todos] = useReducer(todoReducer, initialState);

	console.log(todos);

	return (
		<div>
			<h1>Todo App</h1>
			<hr />
			<ol>
				<li>Go for a walk</li>
				<li>Wash the dishes</li>
				<li>Make dinner</li>
				<li>Eat Pizza</li>
			</ol>
		</div>
	);
};

export default TodoApp;
