import { describe, expect, it, vi } from "vitest";

vi.mock("./cal-embed", () => ({
  CalEmbed: () => null,
}));

import {
  submitIntake,
  validateBookingStep,
  type BookingForm,
} from "./booking-wizard";

const form: BookingForm = {
  planId: "nutrition",
  name: "Jane Doe",
  address: "123 Main St",
  email: "jane@example.com",
  phone: "604-555-1212",
  petName: "Rusty",
  breed: "French Bulldog",
  allergies: "None",
  weight: "30 pounds and active",
  issues: "None",
  raw: "Yes",
  qa: "",
  website: "",
};

describe("validateBookingStep", () => {
  it("uses intake validation messages for the current step", () => {
    expect(
      validateBookingStep({ ...form, email: "bad", phone: "6045551212" }, 2),
    ).toEqual({
      email: "Email is invalid",
      phone: "Phone number is invalid",
    });
  });

  it("does not report fields from later steps", () => {
    expect(
      validateBookingStep({ ...form, petName: "", allergies: "" }, 3),
    ).toEqual({ petName: "Pet name is required" });
  });
});

describe("submitIntake", () => {
  it("reports success only after a 200 response", async () => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );

    await expect(submitIntake(form, fetcher)).resolves.toEqual({
      ok: true,
      errors: {},
    });
    expect(fetcher).toHaveBeenCalledWith("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  });

  it("keeps field errors from a failed response", async () => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({ ok: false, errors: { email: "Email is invalid" } }),
        { status: 400 },
      ),
    );

    await expect(submitIntake(form, fetcher)).resolves.toEqual({
      ok: false,
      errors: { email: "Email is invalid" },
    });
  });
});
