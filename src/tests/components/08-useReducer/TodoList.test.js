import { shallow } from 'enzyme';

import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests on <TodoList /> component', () => {
	const handleDelete = jest.fn();
	const toggleComplete = jest.fn();

	const wrapper = shallow(<TodoList todos={demoTodos} handleDelete={handleDelete} toggleComplete={toggleComplete} />);

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());

	test('Should render the exact number of <TodoListItem /> components according to the todos list', () => {
		expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
	});

	test('<TodoListItem /> children should receive required props', () => {
		const lastTodoProps = wrapper.find('TodoListItem').last().props();
		const { todo, handleDelete, toggleComplete } = lastTodoProps;

		expect(todo).toEqual(demoTodos[demoTodos.length - 1]);
		expect(handleDelete).toEqual(expect.any(Function));
		expect(toggleComplete).toEqual(expect.any(Function));
	});
});
