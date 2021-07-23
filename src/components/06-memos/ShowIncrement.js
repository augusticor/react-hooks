import React from 'react';
import PropTypes from 'prop-types';

const ShowIncrement = React.memo(({ incrementFunction }) => {
	console.log('Me volvi a re-renderizar :(');

	return (
		<button
			className='btn btn-primary'
			onClick={() => {
				incrementFunction(4);
			}}
		>
			Increment +4
		</button>
	);
});

ShowIncrement.propTypes = {
	incrementFunction: PropTypes.func.isRequired,
};

export default ShowIncrement;
