import { JSONParser } from 'json-parser';

interface UserProfile {
  userName: string;
  avatarUrl: string;
}

/**
 * Fetch the username of the current logged in user
 */
export function getUserProfile(idToken: string | undefined): UserProfile | null {
  // auth.current.id_token is a JSON string
  // we must parse this to obtain the username
  if (!idToken) {
    return null;
  }

  return {
    userName,
    avatarUrl
  } = JSONParser(idToken);
}