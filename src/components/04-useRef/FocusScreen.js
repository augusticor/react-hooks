import React, { useRef } from 'react';

import './focusStyles.css';

const FocusScreen = () => {
	const inputReference = useRef();

	const handleClick = (event) => {
		inputReference.current.select();
		console.log(inputReference);
	};

	return (
		<div>
			<h1>Focus screen, useRef React Hook</h1>
			<hr />

			<label htmlFor='nameInput'>User Name</label>
			<input ref={inputReference} id='nameInput' type='text' className='form-control mt-3' placeholder='Your name' name='name' />

			<button className='btn btn-outline-primary mt-5' onClick={handleClick}>
				Focus !
			</button>
		</div>
	);
};

export default FocusScreen;
