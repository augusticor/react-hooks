import React from 'react';

import { useForm } from '../hooks/useForm';

import './effects.css';

const FormWithCustomHook = () => {
	// Usando ahora el useForm custom hook
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formValues;

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formValues);
	};

	return (
		<>
			<h1>Form with custom hook</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='nameInput'>User Name</label>
					<input
						id='nameInput'
						type='text'
						className='form-control'
						placeholder='Your name'
						name='name'
						autoComplete='off'
						value={name}
						onChange={handleInputChange}
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='emailInput'>Your email</label>
					<input
						id='emailInput'
						type='email'
						className='form-control'
						placeholder='example@example.example'
						name='email'
						value={email}
						onChange={handleInputChange}
						required={true}
					/>
					<small className='form-text text-muted'>We'll never share your email with anyone else.</small>
				</div>

				<div className='form-group'>
					<label htmlFor='passwordInput'>Password</label>
					<input id='passwordInput' type='password' className='form-control' name='password' value={password} onChange={handleInputChange} required={true} />
				</div>

				<button type='submit' className='btn btn-success'>
					Submit form
				</button>
			</form>
		</>
	);
};

export default FormWithCustomHook;
