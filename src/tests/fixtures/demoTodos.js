export const demoTodos = [
	{
		id: new Date().getTime() + 1,
		desc: 'Learn React',
		done: false,
	},
	{
		id: new Date().getTime() + 2,
		desc: 'Learn Express',
		done: true,
	},
	{
		id: new Date().getTime() + 3,
		desc: 'Learn Node',
		done: false,
	},
	{
		id: new Date().getTime() + 4,
		desc: 'Learn Mongo',
		done: true,
	},
	{
		id: new Date().getTime() + 5,
		desc: 'Read a book',
		done: false,
	},
	{
		id: new Date().getTime() + 6,
		desc: 'Play voleyball',
		done: true,
	},
	{
		id: new Date().getTime() + 7,
		desc: 'Practice English',
		done: false,
	},
];

export const middleTodo = (todosList) => {
	return todosList[Math.trunc(todosList.length / 2)];
};
