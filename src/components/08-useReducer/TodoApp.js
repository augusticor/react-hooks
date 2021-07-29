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

	const handleDelete = (todoId) => {
		const deleteAction = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(deleteAction);
	};

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

	const handleInvert = () => {
		todos.forEach((t) => toggleComplete(t.id));
	};

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
					<ul className='list-group-flush'>
						{todos.map((todo, i) => {
							return (
								<li key={todo.id} className='list-group-item list-group-item-action'>
									<p id={todo.id} className={`text-center ${todo.done && 'complete'}`}>
										{i + 1}. {todo.desc}
									</p>
									<input type='checkbox' className='checkbx' name='completed' checked={todo.done} id='completeinput' onChange={() => toggleComplete(todo.id)} />
									<button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
										Remove
									</button>
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
						<hr />
						<div className='tools-section'>
							<label htmlFor='checkall'>Check all tasks</label>
							<input type='checkbox' className='checkbx' id='checkall' onChange={() => checkAll()} />
						</div>
						<div className='tools-section'>
							<label htmlFor='invert'>Invert selected</label>
							<button id='invert' className='btn btn-outline-primary' onClick={handleInvert}>
								Invert selection
							</button>
						</div>
						<div className='tools-section'>
							<label htmlFor='deleteall'>Delete all tasks !</label>
							<button id='deleteall' className='btn btn-outline-danger' onClick={deleteAll}>
								Delete all !
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default TodoApp;
