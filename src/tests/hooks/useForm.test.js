import { act, renderHook } from '@testing-library/react-hooks';

import { useForm } from '../../components/hooks/useForm';

describe('Tests on useForm custom hook', () => {
	const initialForm = {
		name: 'Peppe',
		lastname: 'Saurio',
		email: 'pepe@peppa.com',
		password: '21i31jdai1o2',
	};

	const event = {
		target: {
			name: 'name',
			value: 'Peppon',
		},
	};

	test('Should return default array form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		expect(result.current).toEqual([initialForm, expect.any(Function), expect.any(Function)]);
	});

	test('Should change NAME on the form object', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange] = result.current;

		act(() => handleInputChange(event));

		const [{ name }] = result.current;
		expect(name).not.toEqual(initialForm.name);
	});

	test('Should reset form using reset function', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange, resetForm] = result.current;

		act(() => {
			handleInputChange(event);
			resetForm();
		});

		const [formValues] = result.current;
		expect(formValues).toEqual(initialForm);
	});
});
