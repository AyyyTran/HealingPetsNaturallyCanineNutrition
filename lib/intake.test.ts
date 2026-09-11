import { describe, expect, it } from "vitest";
import { parseIntake } from "./intake";

const valid = {
  planId: "nutrition",
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
  website: "",
};

describe("parseIntake", () => {
  it("accepts a complete intake", () => {
    const result = parseIntake(valid);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.planId).toBe("nutrition");
      expect(result.data.petName).toBe("Rusty");
    }
  });

  it("rejects an invalid email and phone", () => {
    const result = parseIntake({
      ...valid,
      email: "not-an-email",
      phone: "5551212",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.email).toBeTruthy();
      expect(result.errors.phone).toBeTruthy();
    }
  });

  it("rejects an email containing multiple recipients", () => {
    const result = parseIntake({
      ...valid,
      email: "victim@example.com,attacker@example.net",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.email).toBe("Email is invalid");
  });

  it.each(["6045551212", "(604) 555-1212"])(
    "accepts and formats the phone number %s",
    (phone) => {
      const result = parseIntake({ ...valid, phone });
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.data.phone).toBe("604-555-1212");
    },
  );

  it("rejects a missing required health field", () => {
    const result = parseIntake({ ...valid, allergies: "  " });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.allergies).toBeTruthy();
  });

  it("rejects an unknown plan", () => {
    const result = parseIntake({ ...valid, planId: "deluxe" });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.planId).toBeTruthy();
  });

  it("treats a filled honeypot as invalid without leaking why", () => {
    const result = parseIntake({ ...valid, website: "http://spam.test" });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.errors.form).toBe("invalid");
  });

  it("allows empty optional questions field", () => {
    const result = parseIntake({ ...valid, qa: "" });
    expect(result.ok).toBe(true);
  });
});
