export const schedule = (fn: () => void, intervalMs: number) => {
  setInterval(fn, intervalMs);
}