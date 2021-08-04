import { shallow } from 'enzyme';

import HooksApp from '../HooksApp';

describe('Tests on <HooksApp /> component', () => {
	const wrapper = shallow(<HooksApp />);

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());
});
