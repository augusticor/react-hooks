import { mount, shallow } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Tests on <AppRouter /> component', () => {
	// const wrapper = mount(<AppRouter />);
	const wrapper = shallow(<AppRouter />);

	test('Should display right', () => expect(wrapper).toMatchSnapshot());
});
