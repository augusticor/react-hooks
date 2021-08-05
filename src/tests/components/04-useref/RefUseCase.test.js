import { shallow } from 'enzyme';

import RefUseCase from '../../../components/04-useRef/RefUseCase';

describe('Tests on <RefUseCase/> component', () => {
	const wrapper = shallow(<RefUseCase />);

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());

	test('Should not exist <MultipleCustomHooks /> component yet', () => {
		expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
	});

	test('Should display <MultipleCustomHooks /> component', () => {
		wrapper.find('button').simulate('click');
		expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
	});

	test('Should match snapshot after click', () => expect(wrapper).toMatchSnapshot());
});
