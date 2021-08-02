import React, { useContext } from 'react';

import { UserContext } from './UserContext';

const AboutScreen = () => {
	const { user, setUser } = useContext(UserContext);

	const handleClick = () => {
		setUser({});
	};

	return (
		<div>
			<h1>About</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 4)}</pre>
			<button className='btn btn-warning' onClick={handleClick}>
				Bye bye !
			</button>
		</div>
	);
};

export default AboutScreen;
