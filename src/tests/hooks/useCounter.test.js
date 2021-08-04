import { act, renderHook } from '@testing-library/react-hooks';

import { useCounter } from '../../components/hooks/useCounter';

describe('Testing on useCounter custom hook', () => {
	const initialState = 84;
	const incQuantity = 293;
	const decQuantity = 501;

	test('Should return the default return object {state, increment, decrement, reset}', () => {
		const { result } = renderHook(() => useCounter());

		expect(result.current).toEqual({
			state: 10,
			increment: expect.any(Function),
			decrement: expect.any(Function),
			reset: expect.any(Function),
		});
	});

	test('Should return the initial state', () => {
		const { result } = renderHook(() => useCounter(initialState));
		expect(result.current.state).toBe(initialState);
	});

	test('Increment function by one should work', () => {
		const { result } = renderHook(() => useCounter(initialState));
		const { increment } = result.current;

		act(() => {
			increment();
		});

		expect(result.current.state).toBe(initialState + 1);
	});

	test('Decrement by one should work', () => {
		const { result } = renderHook(() => useCounter(initialState));
		const { decrement } = result.current;

		act(() => {
			decrement();
		});

		expect(result.current.state).toBe(initialState - 1);
	});

	test('Reset function should work', () => {
		const { result } = renderHook(() => useCounter(initialState));
		const { increment, decrement, reset } = result.current;

		act(() => {
			increment(incQuantity);
			decrement(decQuantity);
			reset();
		});

		expect(result.current.state).toBe(initialState);
	});

	test('Increment and decrement function by a number should work', () => {
		const { result } = renderHook(() => useCounter(initialState));
		const { increment, decrement } = result.current;

		act(() => increment(incQuantity));
		expect(result.current.state).toBe(initialState + incQuantity);

		act(() => decrement(decQuantity));
		expect(result.current.state).toBe(initialState - decQuantity);
	});
});
