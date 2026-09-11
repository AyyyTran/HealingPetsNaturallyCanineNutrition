import { afterEach, describe, expect, it } from "vitest";
import { calEventLink, calFallbackUrl } from "./cal";

describe("calEventLink", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_CAL_USERNAME;
    delete process.env.NEXT_PUBLIC_CAL_EVENT_NUTRITION;
  });

  it("joins username and slug", () => {
    process.env.NEXT_PUBLIC_CAL_USERNAME = "andy";
    process.env.NEXT_PUBLIC_CAL_EVENT_NUTRITION = "nutrition-plan";
    expect(calEventLink("nutrition")).toBe("andy/nutrition-plan");
    expect(calFallbackUrl("nutrition")).toBe(
      "https://cal.com/andy/nutrition-plan",
    );
  });
});
