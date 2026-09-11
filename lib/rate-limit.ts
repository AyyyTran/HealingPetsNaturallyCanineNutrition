type Bucket = { count: number; resetAt: number };

export function createRateLimiter() {
  const buckets = new Map<string, Bucket>();
  return function rateLimit(
    key: string,
    opts: { limit: number; windowMs: number } = {
      limit: 5,
      windowMs: 60 * 60 * 1000,
    },
  ) {
    const now = Date.now();
    const current = buckets.get(key);
    if (!current || now >= current.resetAt) {
      buckets.set(key, { count: 1, resetAt: now + opts.windowMs });
      return true;
    }
    if (current.count >= opts.limit) return false;
    current.count += 1;
    return true;
  };
}

export const allowIntake = createRateLimiter();
