import { heavyProcess } from '../../helpers/heavyProcess';

describe('Tests on heavy process', () => {
	test('should return the exact number of iterations done', () => {
		const iterations = 100;
		expect(heavyProcess(iterations)).toBe(`${iterations} made ! !`);
	});
});
