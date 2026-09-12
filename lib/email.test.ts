import { describe, expect, it } from "vitest";
import { formatIntakeEmail } from "./email";
import type { Intake } from "./intake";

const intake: Intake = {
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
  appointmentDate: "2026-09-12",
  appointmentTime: "09:00",
  appointmentLabel: "September 12, 2026 at 9:00 AM Pacific",
};

describe("formatIntakeEmail", () => {
  it("includes the requested time and intake fields for Karissa", () => {
    const mail = formatIntakeEmail(intake);
    expect(mail.subject).toBe("Contact Form Details");
    expect(mail.text).toContain("jane@example.com");
    expect(mail.text).toContain("Rusty");
    expect(mail.text).toContain("Chicken");
    expect(mail.text).toContain("September 12, 2026 at 9:00 AM Pacific");
    expect(mail.text).toContain("$30");
  });
});
