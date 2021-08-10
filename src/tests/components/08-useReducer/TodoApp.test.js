import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests on <TodoApp /> component', () => {
	const wrapper = shallow(<TodoApp />);

	Storage.prototype.setItem = jest.fn();

	test('Should display correctly', () => expect(wrapper).toMatchSnapshot());

	test('Should add a TODO', () => {
		// const mountWrapper = mount(<TodoApp />);

		// act(() => {
		// 	mountWrapper.find('TodoAddForm').prop('handleAddTodo')(demoTodos[0])
		// 	mountWrapper.find('TodoAddForm').prop('handleAddTodo')(demoTodos[1])
		// 	mountWrapper.find('TodoAddForm').prop('handleAddTodo')(demoTodos[2])
		// })

		// expect(wrapper.find('strong').text().trim()).toBe('3');
		// expect(localStorage.setItem).toHaveBeenCalledTimes(3);
		expect(localStorage.setItem).toHaveBeenCalledTimes(0);
	});

	test('Should delete a TODO', () => {
		const handleAddTodo = wrapper.find('TodoAddForm').prop('handleAddTodo');
		for (let i = 0; i < 4; i++) {
			handleAddTodo(demoTodos[i]);
		}

		expect(wrapper.find('strong').text().trim()).toBe('4');

		const handleDelete = wrapper.find('TodoList').prop('handleDelete');
		handleDelete(demoTodos[1].id);

		expect(wrapper.find('strong').text().trim()).toBe('3');
	});
});
