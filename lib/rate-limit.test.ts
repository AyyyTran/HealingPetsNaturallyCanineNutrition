import { describe, expect, it } from "vitest";
import { createRateLimiter } from "./rate-limit";

describe("createRateLimiter", () => {
  it("allows up to the limit then blocks", () => {
    const allow = createRateLimiter();
    expect(allow("1.1.1.1", { limit: 2, windowMs: 60_000 })).toBe(true);
    expect(allow("1.1.1.1", { limit: 2, windowMs: 60_000 })).toBe(true);
    expect(allow("1.1.1.1", { limit: 2, windowMs: 60_000 })).toBe(false);
    expect(allow("2.2.2.2", { limit: 2, windowMs: 60_000 })).toBe(true);
  });
});
