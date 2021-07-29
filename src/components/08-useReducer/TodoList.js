import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDelete, toggleComplete }) => {
	return (
		<ul className='list-group-flush'>
			{todos.map((todo, i) => (
				<TodoListItem key={todo.id} todo={todo} index={i} handleDelete={handleDelete} toggleComplete={toggleComplete} />
			))}
		</ul>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
	todos: [],
};

export default TodoList;
