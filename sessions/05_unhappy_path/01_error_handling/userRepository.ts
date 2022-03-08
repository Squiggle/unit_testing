import { query } from './database';

export const getUser = (username: string) => {
  try {
    query(`SELECT * FROM users WHERE username LIKE $1`, username);
  }
  catch (err) {
    throw new Error(`Failed to access user ${username}`);
  }
};