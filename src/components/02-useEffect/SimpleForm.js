import React, { useEffect, useState } from 'react';

import { Message } from './Message';

import './effects.css';

const SimpleForm = () => {
	const [shortNameMsg, setShortNameMsg] = useState('');

	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formState;

	// use effect hook
	useEffect(() => {
		console.log('hey useEffect !!');
	}, []);

	useEffect(() => {
		setShortNameMsg(name.length < 6 && `${6 - name.length} characters left to the goal`);
		console.log('Name cambio !!');
	}, [name]);

	// del evento viene un target, destructuring
	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	return (
		<>
			<h1>Use effect hook on form</h1>
			<hr />
			<form>
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
					<small className='form-text text-muted'>{shortNameMsg}</small>
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

				{name === 'Cool' && <Message />}

				<button type='submit' className='btn btn-success'>
					Submit form
				</button>
			</form>
		</>
	);
};

export default SimpleForm;
