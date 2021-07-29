import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';

import './styles.css';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
	// return [
	// 	{
	// 		id: new Date().getTime(),
	// 		desc: 'Learn React',
	// 		done: false,
	// 	},
	// ];
};

const TodoApp = () => {
	//useReducer hook
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (todoId) => {
		const deleteAction = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(deleteAction);
	};

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'create',
			payload: newTodo,
		});
	};

	const toggleComplete = (todoId) => {
		const toggleAction = {
			type: 'toggle',
			payload: todoId,
		};

		dispatch(toggleAction);
	};

	const checkAll = () => {
		const checked = document.getElementById('checkall').checked;
		const checkAllAction = {
			type: 'checkall',
			payload: checked,
		};

		dispatch(checkAllAction);
	};

	const handleInvert = () => todos.forEach((t) => toggleComplete(t.id));

	const deleteAll = () => dispatch({ type: 'reset' });

	return (
		<>
			<h1>Todo App</h1>
			<h3>
				Total tasks: <strong>{todos.length}</strong>
			</h3>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} handleDelete={handleDelete} toggleComplete={toggleComplete} />
				</div>

				<div className='col-5'>
					<TodoAddForm handleAddTodo={handleAddTodo} checkAll={checkAll} handleInvert={handleInvert} deleteAll={deleteAll} />
				</div>
			</div>
		</>
	);
};

export default TodoApp;
