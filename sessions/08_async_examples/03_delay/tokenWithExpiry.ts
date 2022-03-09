import { purgeToken } from './tokenCache';

/**
 * Purge the given token after one minute
 * @param token token
 * @param cancellationCallback Callback when token expires
 * @param lifespan lifespan in milliseconds
 * @returns 
 */
export const tokenWithExpiry = (token: string) => {
  setTimeout(() => purgeToken(token), 60000);
};