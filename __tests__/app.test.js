import { handleSubmit } from './app'; 

describe('Testing the handleSubmit function', () => {
  test('It should be defined', () => {
    expect(handleSubmit).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof handleSubmit).toBe('function');
  });

});
