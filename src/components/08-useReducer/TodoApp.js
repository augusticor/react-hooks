import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';
import { useForm } from '../hooks/useForm';

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

	const [{ taskname }, handleInputChange, resetForm] = useForm({ taskname: '' });

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleSubmit = (eve) => {
		eve.preventDefault();

		if (taskname.trim().length <= 2) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: taskname,
			done: false,
		};

		const createTodoAction = {
			type: 'create',
			payload: newTodo,
		};

		dispatch(createTodoAction);
		resetForm();
	};

	return (
		<>
			<h1>Todo App</h1>
			<h3>
				Remaining tasks: <strong>{todos.length}</strong>
			</h3>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<ul className='list-group-flush'>
						{todos.map((todo, i) => {
							return (
								<li key={todo.id} className='list-group-item list-group-item-action'>
									<p className='text-center'>
										{i + 1}. {todo.desc}
									</p>
									<button className='btn btn-danger'>Remove</button>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='col-5'>
					<h4>Add TODO</h4>
					<hr />
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='taskinput'>New task title</label>
							<input type='text' className='form-control' id='taskinput' name='taskname' placeholder='Learn ...' value={taskname} onChange={handleInputChange} />
						</div>
						<button className='btn btn-outline-primary mt-1'>Add</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default TodoApp;
