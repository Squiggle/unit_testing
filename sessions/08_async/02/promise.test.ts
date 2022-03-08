/**
 * Delays execution of a function for a numer of milliseconds
 * @param fn 
 * @param delayMs 
 * @returns 
 */
function delay(fn: () => void, delayMs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, delayMs);
  });
}

describe('async', () => {
  it('is out of sequence when not awaited', () => {
    console.log("one");
    delay(() => console.log("two"), 10);
    console.log("three");
  });
});