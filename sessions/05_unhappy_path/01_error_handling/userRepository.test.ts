import { query } from './database';
import { getUser } from './userRepository';

jest.mock('./database');

// stub
const brokenDatabase = query as jest.MockedFunction<typeof query>;
brokenDatabase.mockImplementation(() => { throw new Error("broken database") });

describe('error handling', () => {
  it('is a bad example of error handling', () => {
    try {
      getUser('foo');
    }
    catch (err) {
      expect(err).toStrictEqual(new Error("Failed to access user foo"));
    }
  });

  it('is a good example of error handling', () => {
    expect(() => getUser('foo')).toThrow(new Error("Failed to access user foo"));
  });

  it('is another good example of error handling', () => {
    expect(() => getUser('foo')).toThrow(/Failed to access user foo/);
  });
});