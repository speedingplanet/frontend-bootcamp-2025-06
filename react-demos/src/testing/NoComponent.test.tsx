import { describe, test, expect } from 'vitest';

describe('Minimal test', () => {
	test.only('Test 1', () => {
		expect(2 + 4).toBe(6);
	});

	test('Test 2', () => {
		expect(2 + 4).toBe(6);
	});

	test('Test 3', () => {
		expect(2 + 4).toBe(6);
	});
});
