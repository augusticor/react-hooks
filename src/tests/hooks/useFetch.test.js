import { renderHook } from '@testing-library/react-hooks';

import { useFetch } from '../../components/hooks/useFetch';

describe('Tests on useFetch custom hook now with ref', () => {
	const url = 'https://www.breakingbadapi.com/api/quotes/1';

	test('Should return the default information', () => {
		const { result } = renderHook(() => useFetch(url));
		expect(result.current).toEqual({
			data: null,
			loading: true,
			error: null,
		});
	});

	test('Should resolve request {data: quote, loading: false, error: null}', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

		await waitForNextUpdate({ timeout: 4000 });

		expect(result.current).toEqual({
			data: expect.any(Array),
			loading: false,
			error: null,
		});
	});

	test('Should throw error if the url is wrong', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apide/papa//erte/users/23'));

		await waitForNextUpdate({ timeout: 3000 });

		expect(result.current).toEqual({
			data: null,
			loading: true,
			error: 'Error loading the info !!',
		});
	});
});
