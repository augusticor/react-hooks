export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'create':
			return [...state, action.payload];
		case 'update':
			return state;
		default:
			return state;
	}
};
