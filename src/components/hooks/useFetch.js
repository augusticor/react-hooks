import { useEffect, useRef, useState } from 'react';

export const useFetch = (originURL) => {
	if (!originURL) {
		throw Error('API URL is required !');
	}

	const isComponentMounted = useRef(true);

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		return () => (isComponentMounted.current = false);
	}, []);

	useEffect(() => {
		setState({ data: null, loading: true, error: null });

		fetch(originURL)
			.then((res) => res.json())
			.then((data) => {
				setTimeout(() => {
					if (isComponentMounted.current) {
						setState({
							data,
							loading: false,
							error: null,
						});
					} else {
						console.log('Se previnio el error !! de actualizacion');
					}
				}, 2000);
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
