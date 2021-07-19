import { useEffect, useState } from 'react';

export const useFetch = (originURL) => {
	if (!originURL) {
		throw Error('API URL is required !');
	}

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		setState({ data: null, loading: true, error: null });

		fetch(originURL)
			.then((res) => res.json())
			.then((data) => {
				setState({
					data,
					loading: false,
					error: null,
				});
			})
			.catch((error) => {
				setState({
					data: null,
					loading: true,
					error,
				});
			});
	}, [originURL]);

	return state;
};
