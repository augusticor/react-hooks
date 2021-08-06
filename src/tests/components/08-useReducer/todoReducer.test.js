import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos, middleTodo } from '../../fixtures/demoTodos';

describe('Tests on todo reducer', () => {
	test('Should return default state (last state)', () => {
		// state todas las tareas y action none {}
		const state = todoReducer(demoTodos, {});
		expect(state).toEqual(demoTodos);
	});

	test('Should add a new TODO', () => {
		const newTodo = { id: new Date().getTime(), desc: 'Watch YT', done: true };
		const action = { type: 'create', payload: newTodo };

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(demoTodos.length + 1);
		expect(state).toEqual([...demoTodos, newTodo]);
		expect(state.pop()).toEqual(newTodo);
	});

	test('Should delete a TODO', () => {
		const todoToDelete = middleTodo(demoTodos); // Delete the middle todo in the list
		const action = { type: 'delete', payload: todoToDelete.id };

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(demoTodos.length - 1);
		expect(state.find((itodo) => itodo === todoToDelete)).toBe(undefined);
		expect(middleTodo(state)).not.toEqual(todoToDelete);
	});

	test('Should toggle specified TODO', () => {
		const todoToggle = middleTodo(demoTodos); // Middle todo in the list to toggle
		const action = { type: 'toggle', payload: todoToggle.id };

		const state = todoReducer(demoTodos, action);

		expect(middleTodo(state).done).not.toEqual(todoToggle.done);
		expect(middleTodo(state)).not.toEqual(todoToggle);
	});

	test('Should check all TODOS', () => {
		const action = { type: 'checkall', payload: true };
		const state = todoReducer(demoTodos, action);

		expect(state.filter((todo) => todo.done === false)).toEqual([]);
	});

	test('Should uncheck all TODOS', () => {
		const action = { type: 'checkall', payload: false };
		const state = todoReducer(demoTodos, action);

		expect(state.filter((todo) => todo.done === true)).toEqual([]);
	});

	test('Should delete all TODOS', () => {
		const action = { type: 'reset' };
		const state = todoReducer(demoTodos, action);

		expect(state).toEqual([]);
		expect(state.length).toBe(0);
	});
});
