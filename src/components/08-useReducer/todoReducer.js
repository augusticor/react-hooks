export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'create':
			return [...state, action.payload];
		case 'toggle':
			return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
		case 'delete':
			return state.filter((todo) => todo.id !== action.payload);
		case 'checkall':
			return state.map((todo) => ({ ...todo, done: action.payload }));
		case 'reset':
			return [];
		default:
			return state;
	}
};
