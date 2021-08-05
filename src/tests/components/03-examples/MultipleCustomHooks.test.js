import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/examples/MultipleCustomHooks';

import { useFetch } from '../../../components/hooks/useFetch';
import { useCounter } from '../../../components/hooks/useCounter';

jest.mock('../../../components/hooks/useFetch');
jest.mock('../../../components/hooks/useCounter');

describe('Tests on <MultipleCustomHooks /> component', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		useCounter.mockReturnValue({
			state: 1,
			increment: () => {},
			reset: () => {},
		});
	});

	test('Should match snapshot', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should display the retraived information', () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: 'Walter White',
					quote: 'I am not in danger, Skyler. I am the danger!',
					series: 'Breaking Bad',
				},
			],
			loading: false,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper.find('.alert').exists()).toBeFalsy();
		expect(wrapper.find('p').text()).toBe('I am not in danger, Skyler. I am the danger!');
		expect(wrapper.find('cite').exists).toBeTruthy();
		expect(wrapper.find('cite').text()).toBe(' Breaking Bad series');
		expect(wrapper.find('button').exists).toBeTruthy();
	});

	test('Reset function should be called when counter is greater than 101', () => {
		const reset = jest.fn();

		useCounter.mockReturnValue({
			state: 102,
			increment: () => {},
			reset,
		});

		useFetch.mockReturnValue({ data: null, loading: true, error: null });

		shallow(<MultipleCustomHooks />);
		expect(reset).toHaveBeenCalled();
	});
});
