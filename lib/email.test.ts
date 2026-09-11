import { describe, expect, it } from "vitest";
import { formatIntakeEmail } from "./email";
import type { Intake } from "./intake";

const intake: Intake = {
  planId: "premium",
  name: "Jane Doe",
  address: "123 Main St",
  email: "jane@example.com",
  phone: "604-555-1212",
  petName: "Rusty",
  breed: "French Bulldog",
  allergies: "Chicken",
  weight: "28 lbs",
  issues: "Yeast",
  raw: "Yes",
  qa: "None",
};

describe("formatIntakeEmail", () => {
  it("includes plan, pet, and contact fields for Karissa", () => {
    const mail = formatIntakeEmail(intake);
    expect(mail.subject).toContain("Premium Consultation Plan");
    expect(mail.subject).toContain("Rusty");
    expect(mail.text).toContain("jane@example.com");
    expect(mail.text).toContain("Chicken");
    expect(mail.clientText).toContain("$30");
    expect(mail.clientText).toContain("info@healingpetsnutrition.com");
  });
});
