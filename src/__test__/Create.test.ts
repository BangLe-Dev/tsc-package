import { Greeter } from '../index';
test('My Test', () => {
  expect(Greeter('Bang')).toBe('Hello Bang');
});