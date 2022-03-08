type Role = 'user' | 'admin' | 'publisher';

// hard-coded database of user roles,
// behaves like a synchronous database
const roles: { [key: string]: Role[] } = {
  'Nish': ['user'],
  'Jolene': ['admin'],
  'Larry': ['user'],
  'Davina': ['admin']
}

/**
 * Fetch the roles of a named user
 * @param username Username
 * @returns An array of Roles, or empty array if user is not known
 */
export const userRoles = (username: string): string[] => {
  return username in roles
    ? roles[username]
    : [];
}