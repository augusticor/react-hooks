import React, { useEffect, useState } from 'react';

import MultipleCustomHooks from '../examples/MultipleCustomHooks';

import './focusStyles.css';

const RefUseCase = () => {
	const [displayComponent, setDisplayComponent] = useState(false);
	const [btnText, setBtnText] = useState('Show Component !');

	useEffect(() => {
		setBtnText(displayComponent ? 'HIDE Component' : 'SHOW Component');
	}, [displayComponent]);

	return (
		<div>
			<h1>Real example of REF Hook</h1>
			<hr />

			{displayComponent && <MultipleCustomHooks />}

			<button
				onClick={() => {
					setDisplayComponent(!displayComponent);
				}}
				className='btn btn-danger mt-4'
			>
				{btnText}
			</button>
		</div>
	);
};

export default RefUseCase;
