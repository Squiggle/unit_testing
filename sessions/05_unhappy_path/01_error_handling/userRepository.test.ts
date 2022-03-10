import { query } from './database';
import { getUser } from './userRepository';

jest.mock('./database');

// stub
const brokenDatabase = query as jest.MockedFunction<typeof query>;
brokenDatabase.mockImplementation(() => { throw new Error("broken database") });

describe('error handling', () => {
  it('is a bad example of error handling', () => {

  });

  it('is a good example of error handling', () => {
  });

  it('is another good example of error handling', () => {

  });
});