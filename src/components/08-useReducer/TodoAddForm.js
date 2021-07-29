import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

const TodoAddForm = ({ handleAddTodo, checkAll, handleInvert, deleteAll }) => {
	const [{ taskname }, handleInputChange, resetForm] = useForm({ taskname: '' });

	const handleSubmit = (event) => {
		event.preventDefault();

		if (taskname.trim().length <= 2) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: taskname,
			done: false,
		};

		handleAddTodo(newTodo);
		resetForm();
	};

	return (
		<>
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
					<input type='checkbox' className='checkbx' id='checkall' onChange={checkAll} />
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
		</>
	);
};

TodoAddForm.propTypes = {
	handleAddTodo: PropTypes.func.isRequired,
	checkAll: PropTypes.func.isRequired,
	handleInvert: PropTypes.func.isRequired,
	deleteAll: PropTypes.func.isRequired,
};

export default TodoAddForm;
