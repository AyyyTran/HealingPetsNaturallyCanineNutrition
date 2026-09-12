import { describe, expect, it } from "vitest";
import { parseAppointment } from "./appointment";

// 2026-09-11 15:00 PDT = 22:00 UTC
const fridayAfternoonPt = new Date("2026-09-11T22:00:00Z");

describe("parseAppointment", () => {
  it("accepts tomorrow at 9:00 AM Pacific", () => {
    const result = parseAppointment("2026-09-12", "09:00", fridayAfternoonPt);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.label).toContain("September 12");
      expect(result.label).toContain("9:00 AM");
      expect(result.label).toContain("Pacific");
    }
  });

  it("accepts 5:00 PM Pacific on a future day", () => {
    const result = parseAppointment("2026-09-12", "17:00", fridayAfternoonPt);
    expect(result.ok).toBe(true);
  });

  it("rejects the same Pacific calendar day", () => {
    const result = parseAppointment("2026-09-11", "09:00", fridayAfternoonPt);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBeTruthy();
  });

  it("rejects times outside 9:00–17:00", () => {
    expect(parseAppointment("2026-09-12", "08:00", fridayAfternoonPt).ok).toBe(
      false,
    );
    expect(parseAppointment("2026-09-12", "18:00", fridayAfternoonPt).ok).toBe(
      false,
    );
  });

  it("rejects times that are not on the hour", () => {
    const result = parseAppointment("2026-09-12", "09:30", fridayAfternoonPt);
    expect(result.ok).toBe(false);
  });

  it("rejects a missing date or time", () => {
    expect(parseAppointment("", "09:00", fridayAfternoonPt).ok).toBe(false);
    expect(parseAppointment("2026-09-12", "", fridayAfternoonPt).ok).toBe(false);
  });
});
