import { describe, expect, it } from "vitest";
import { parseIntake } from "./intake";

const now = new Date("2026-09-11T22:00:00Z");

const valid = {
  name: "Jane Doe",
  address: "123 Main St",
  email: "jane@example.com",
  phone: "604-555-1212",
  petName: "Rusty",
  breed: "French Bulldog",
  allergies: "Allergic to chicken",
  weight: "Not very active, 28 lbs, two meals",
  issues: "Ear yeast",
  raw: "Yes, open to raw",
  qa: "When do we start?",
  appointmentDate: "2026-09-12",
  appointmentTime: "09:00",
  website: "",
};

describe("parseIntake", () => {
  it("accepts a complete intake with a requested appointment", () => {
    const result = parseIntake(valid, now);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.petName).toBe("Rusty");
      expect(result.data.appointmentLabel).toContain("Pacific");
      expect(result.data.appointmentDate).toBe("2026-09-12");
      expect(result.data.appointmentTime).toBe("09:00");
    }
  });

  it("rejects an invalid email and phone", () => {
    const result = parseIntake(
      {
        ...valid,
        email: "not-an-email",
        phone: "5551212",
      },
      now,
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.email).toBeTruthy();
      expect(result.errors.phone).toBeTruthy();
    }
  });

  it("rejects an email containing multiple recipients", () => {
    const result = parseIntake(
      {
        ...valid,
        email: "victim@example.com,attacker@example.net",
      },
      now,
    );
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.email).toBe("Email is invalid");
  });

  it.each(["6045551212", "(604) 555-1212"])(
    "accepts and formats the phone number %s",
    (phone) => {
      const result = parseIntake({ ...valid, phone }, now);
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.data.phone).toBe("604-555-1212");
    },
  );

  it("rejects a missing required health field", () => {
    const result = parseIntake({ ...valid, allergies: "  " }, now);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.allergies).toBeTruthy();
  });

  it("rejects a same-day appointment request", () => {
    const result = parseIntake(
      { ...valid, appointmentDate: "2026-09-11", appointmentTime: "10:00" },
      now,
    );
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.appointmentDate).toBeTruthy();
  });

  it("treats a filled honeypot as invalid without leaking why", () => {
    const result = parseIntake({ ...valid, website: "http://spam.test" }, now);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.form).toBe("invalid");
  });

  it("allows empty optional questions and raw-food fields", () => {
    const result = parseIntake({ ...valid, qa: "", raw: "" }, now);
    expect(result.ok).toBe(true);
  });
});
