import { mount, shallow } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on <LoginScreen/> component', () => {
	const setUser = jest.fn();

	const wrapper = shallow(
		<UserContext.Provider value={setUser}>
			<LoginScreen />
		</UserContext.Provider>
	);

	// const wrapper = mount(
	// 	<UserContext.Provider value={setUser}>
	// 		<LoginScreen />
	// 	</UserContext.Provider>
	// );

	test('Should display snapshot', () => expect(wrapper).toMatchSnapshot());

	// test('Should login user in form', () => {
	// 	const userName = 'Juliana';
	// 	const food = 'Pizza';

	// 	wrapper.find('#nameinput').simulate('change', { target: { name: 'userName', value: userName } });
	// 	wrapper.find('#foodinput').simulate('change', { target: { name: 'food', value: food } });
	// 	wrapper.find('form').simulate('submit', { preventDefault() {} });

	// 	expect(setUser).toHaveBeenCalledWith({ userName, food });
	// });
});
