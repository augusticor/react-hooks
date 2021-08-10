import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { demoTodos, middleTodo } from '../../fixtures/demoTodos';

describe('Tests on <TodoListItem /> component', () => {
	// Arrange
	const todo = middleTodo(demoTodos);
	const index = 0;
	const handleDelete = jest.fn();
	const toggleComplete = jest.fn();

	const wrapper = shallow(<TodoListItem todo={todo} index={index} handleDelete={handleDelete} toggleComplete={toggleComplete} />);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('Should display correctly', () => expect(wrapper).toMatchSnapshot());

	test('Should call handleDelete function', () => {
		wrapper.find('button').simulate('click');
		expect(handleDelete).toHaveBeenCalled();
		expect(handleDelete).toHaveBeenCalledWith(todo.id);
		expect(handleDelete).toHaveBeenCalledTimes(1);
	});

	test('Should call toggle function', () => {
		wrapper.find('.checkbx').simulate('change');
		expect(toggleComplete).toHaveBeenCalled();
		expect(toggleComplete).toHaveBeenCalledWith(todo.id);
		expect(toggleComplete).toHaveBeenCalledTimes(1);
	});

	test('Should display TODO text correctly', () => {
		const todoText = wrapper.find('p').text();
		expect(todoText).toBe(`${index + 1}. ${todo.desc}`);
	});

	test('If TODO is done, class complete should be applied to paragraph', () => {
		const hasClass = wrapper.find('p').hasClass('complete');
		expect(hasClass).toBe(todo.done);
	});

	test('If TODO is done, done checkbox should be checked', () => {
		const checkbox = wrapper.find('.checkbx');
		expect(checkbox.prop('checked')).toBe(todo.done);
	});
});
