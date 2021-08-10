import { mount, shallow } from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on <HomeScreen /> component, use context', () => {
	const user = {
		name: 'Peppin',
		food: 'Fries',
	};

	// const wrapper = mount(
	// 	<UserContext.Provider value={{ user }}>
	// 		<HomeScreen />
	// 	</UserContext.Provider>
	// );

	const wrapper = shallow(
		<UserContext.Provider value={{ user }}>
			<HomeScreen />
		</UserContext.Provider>
	);

	test('Should display the component correctly', () => expect(wrapper).toMatchSnapshot());
});
