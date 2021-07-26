const initialState = [
	{
		id: 1,
		todo: 'Buy bread',
		done: false,
	},
];

const todoReducer = (state = initialState, action) => {
	if (action?.type === 'add') {
		return [...state, action.payload];
	}

	return state;
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Make breakfast',
	done: false,
};

const addTodoAction = {
	type: 'add',
	//payload o newState
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
