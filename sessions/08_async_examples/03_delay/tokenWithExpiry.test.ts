import { purgeToken } from './tokenCache';
import { tokenWithExpiry } from './tokenWithExpiry';

jest.mock('./tokenCache');
const mockPurgeToken = purgeToken as jest.MockedFunction<typeof purgeToken>;

jest.useFakeTimers();

describe('token expiry', () => {
  it('is purged after one minute', () => {
    tokenWithExpiry('abc');
    expect(mockPurgeToken).toBeCalled();
  });
});