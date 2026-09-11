import { beforeEach, describe, expect, it, vi } from "vitest";

const sendMail = vi.fn();

vi.mock("./mailer", () => ({
  getTransport: () => ({ sendMail }),
}));

import { handleIntakePost } from "./intake-handler";

const payload = {
  planId: "nutrition",
  name: "Jane Doe",
  address: "123 Main St",
  email: "jane@example.com",
  phone: "604-555-1212",
  petName: "Rusty",
  breed: "French Bulldog",
  allergies: "None",
  weight: "Active",
  issues: "None",
  raw: "Yes",
  qa: "",
  website: "",
};

describe("handleIntakePost", () => {
  beforeEach(() => {
    process.env.EMAIL_USER = "from@test.com";
    process.env.EMAIL_PASSWORD = "secret";
    process.env.CLIENT_EMAIL = "karissa@test.com";
    sendMail.mockReset();
  });

  it("returns 400 for invalid json", async () => {
    const res = await handleIntakePost(
      new Request("http://local/api/intake", {
        method: "POST",
        body: JSON.stringify({ ...payload, email: "bad" }),
      }),
    );
    expect(res.status).toBe(400);
  });

  it("sends two emails and returns 200", async () => {
    sendMail.mockResolvedValue({});
    const res = await handleIntakePost(
      new Request("http://local/api/intake", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
    expect(res.status).toBe(200);
    expect(sendMail).toHaveBeenCalledTimes(2);
  });

  it("returns 500 and does not claim success if mail fails", async () => {
    sendMail.mockRejectedValueOnce(new Error("smtp"));
    const res = await handleIntakePost(
      new Request("http://local/api/intake", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    );
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json.ok).toBe(false);
  });
});
