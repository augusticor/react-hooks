import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';

import { UserContext } from './UserContext';

const LoginScreen = () => {
	const [{ userName, food }, handleInputChange, resetForm] = useForm({ userName: '', food: '' });

	const { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ userName, food });
		resetForm();
	};

	return (
		<div>
			<h1>Login Screen</h1>
			<hr />

			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='nameinput'>Name</label>
					<input id='nameinput' name='userName' type='text' value={userName} placeholder='Pepito Alimania' onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='foodinput'>Favorite food</label>
					<input id='foodinput' name='food' type='text' value={food} placeholder='Pizza' onChange={handleInputChange} />
				</div>
				<button type='submit' className='btn btn-primary'>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginScreen;
