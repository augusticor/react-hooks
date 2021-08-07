import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, index, handleDelete, toggleComplete }) => {
	return (
		<li key={todo.id} className='list-group-item list-group-item-action'>
			<p id={todo.id} className={`${todo.done && 'complete'}`}>
				{index + 1}. {todo.desc}
			</p>
			<input type='checkbox' className='checkbx' name='completed' checked={todo.done} id='completeinput' onChange={() => toggleComplete(todo.id)} />
			<button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
				Remove
			</button>
		</li>
	);
};

TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	handleDelete: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

TodoListItem.defaultProps = {
	index: 1,
};

export default TodoListItem;
