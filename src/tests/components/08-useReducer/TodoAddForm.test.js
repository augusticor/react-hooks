import { shallow } from 'enzyme';

import TodoAddForm from '../../../components/08-useReducer/TodoAddForm';

describe('Tests on <TodoAddForm /> component', () => {
	const handleAddTodo = jest.fn();
	const checkAll = jest.fn();
	const handleInvert = jest.fn();
	const deleteAll = jest.fn();

	const wrapper = shallow(<TodoAddForm handleAddTodo={handleAddTodo} checkAll={checkAll} handleInvert={handleInvert} deleteAll={deleteAll} />);

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());

	test('Should not call handleAddTodo function if description is empty or too short', () => {
		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit({ preventDefault() {} });
		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test('Should call handleAddTodo function with parameter', () => {
		const taskName = 'Wash the dishes';

		const event = {
			target: {
				name: 'taskname',
				value: taskName,
			},
		};

		wrapper.find('#taskinput').simulate('change', event);
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			desc: taskName,
			done: false,
		});
	});

	test('Should clean input after submit', () => {
		const event = { target: { name: 'taskname', value: 'Wash the dishes' } };
		const input = wrapper.find('#taskinput');

		input.simulate('change', event);
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(input.prop('value')).toBe('');
	});

	test('Should call checkAll function if checkbox changes', () => {
		wrapper.find('#checkall').simulate('change');
		expect(checkAll).toHaveBeenCalledTimes(1);
	});

	test('Should call handleInvert function if button is clicked', () => {
		wrapper.find('#invert').simulate('click');
		expect(handleInvert).toHaveBeenCalledTimes(1);
	});

	test('Should call deleteAll function if delete all button is clicked', () => {
		wrapper.find('#deleteall').simulate('click');
		expect(deleteAll).toHaveBeenCalledTimes(1);
	});
});
