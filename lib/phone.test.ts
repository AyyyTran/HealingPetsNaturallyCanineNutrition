import { describe, expect, it } from "vitest";
import { formatPhoneInput } from "./phone";

describe("formatPhoneInput", () => {
  it("inserts hyphens while typing a 10-digit number", () => {
    expect(formatPhoneInput("6")).toBe("6");
    expect(formatPhoneInput("604")).toBe("604");
    expect(formatPhoneInput("6045")).toBe("604-5");
    expect(formatPhoneInput("604555")).toBe("604-555");
    expect(formatPhoneInput("6045551")).toBe("604-555-1");
    expect(formatPhoneInput("6045551212")).toBe("604-555-1212");
  });

  it("keeps an already hyphenated number", () => {
    expect(formatPhoneInput("604-555-1212")).toBe("604-555-1212");
  });

  it("strips extra characters and stops at 10 digits", () => {
    expect(formatPhoneInput("(604) 555-1212")).toBe("604-555-1212");
    expect(formatPhoneInput("6045551212999")).toBe("604-555-1212");
    expect(formatPhoneInput("abc")).toBe("");
  });
});
