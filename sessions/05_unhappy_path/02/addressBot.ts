import { resolveAddress } from './addressLookup';

interface Message {
  username: string;
  content: string;
}

/**
 * Process a slack message, and respond with a map if requested
 * @param message Inbound message
 * @param render method to respond with a message
 */
export const processMessage = (message: Message, response: (postMessage: string) => void) => {
  const { username, content } = message;

  if (content.startsWith('!map')) {
    const address = resolveAddress(content.substring(5));
    postMessage(`@${username} here is your map: https://www.google.com/maps/@${address.lat},${address.lon}`);
  }
}