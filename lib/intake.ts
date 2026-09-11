import { getPlan, type PlanId } from "./plans";

const EMAIL_RE = /\S+@\S+\.\S+/;
const PHONE_RE = /^\d{3}-\d{3}-\d{4}$/;

export type Intake = {
  planId: PlanId;
  name: string;
  address: string;
  email: string;
  phone: string;
  petName: string;
  breed: string;
  allergies: string;
  weight: string;
  issues: string;
  raw: string;
  qa: string;
};

function str(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseIntake(
  body: unknown,
): { ok: true; data: Intake } | { ok: false; errors: Record<string, string> } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, errors: { form: "invalid" } };
  }
  const input = body as Record<string, unknown>;
  if (str(input.website).length > 0) {
    return { ok: false, errors: { form: "invalid" } };
  }

  const errors: Record<string, string> = {};
  const plan = getPlan(str(input.planId));
  if (!plan) errors.planId = "Please choose a plan";

  const name = str(input.name);
  const address = str(input.address);
  const email = str(input.email);
  const phone = str(input.phone);
  const petName = str(input.petName);
  const breed = str(input.breed);
  const allergies = str(input.allergies);
  const weight = str(input.weight);
  const issues = str(input.issues);
  const raw = str(input.raw);
  const qa = str(input.qa);

  if (!name) errors.name = "Name is required";
  if (!address) errors.address = "Address is required";
  if (!email) errors.email = "Email is required";
  else if (!EMAIL_RE.test(email)) errors.email = "Email is invalid";
  if (!phone) errors.phone = "Phone number is required";
  else if (!PHONE_RE.test(phone)) errors.phone = "Phone number is invalid";
  if (!petName) errors.petName = "Pet name is required";
  if (!breed) errors.breed = "Pet breed is required";
  if (!allergies) errors.allergies = "This field is required";
  if (!weight) errors.weight = "This field is required";
  if (!issues) errors.issues = "This field is required";
  if (!raw) errors.raw = "This field is required";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return {
    ok: true,
    data: {
      planId: plan!.id,
      name,
      address,
      email,
      phone,
      petName,
      breed,
      allergies,
      weight,
      issues,
      raw,
      qa,
    },
  };
}
