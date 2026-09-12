import { describe, expect, it, vi } from "vitest";
import { submitIntake, type BookingForm } from "./booking-wizard";

const form: BookingForm = {
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
  appointmentDate: "2099-01-15",
  appointmentTime: "10:00",
  website: "",
};

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

  it.each([201, 204, 500])(
    "does not treat a %i response as success",
    async (status) => {
      const fetcher = vi.fn().mockResolvedValue(new Response(null, { status }));

      await expect(submitIntake(form, fetcher)).resolves.toEqual({
        ok: false,
        errors: {},
      });
    },
  );

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

  it("identifies a rate-limited response", async () => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: false, error: "rate" }), {
        status: 429,
      }),
    );

    await expect(submitIntake(form, fetcher)).resolves.toEqual({
      ok: false,
      errors: {},
      error: "rate",
    });
  });
});
