import { parseAppointment } from "./appointment";

const EMAIL_RE = /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/;
const PHONE_RE = /^\d{3}-\d{3}-\d{4}$/;

export type Intake = {
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
  appointmentDate: string;
  appointmentTime: string;
  appointmentLabel: string;
};

function str(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseIntake(
  body: unknown,
  now = new Date(),
): { ok: true; data: Intake } | { ok: false; errors: Record<string, string> } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, errors: { form: "invalid" } };
  }
  const input = body as Record<string, unknown>;
  if (str(input.website).length > 0) {
    return { ok: false, errors: { form: "invalid" } };
  }

  const errors: Record<string, string> = {};
  const name = str(input.name);
  const address = str(input.address);
  const email = str(input.email);
  const phoneInput = str(input.phone);
  const phoneDigits = phoneInput.replace(/\D/g, "");
  const phone =
    phoneDigits.length === 10
      ? `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`
      : phoneInput;
  const petName = str(input.petName);
  const breed = str(input.breed);
  const allergies = str(input.allergies);
  const weight = str(input.weight);
  const issues = str(input.issues);
  const raw = str(input.raw);
  const qa = str(input.qa);
  const appointmentDate = str(input.appointmentDate);
  const appointmentTime = str(input.appointmentTime);
  const appointment = parseAppointment(appointmentDate, appointmentTime, now);

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
  if (!appointment.ok) {
    errors.appointmentDate = appointment.error;
  }
  if (Object.keys(errors).length > 0 || !appointment.ok) {
    return { ok: false, errors };
  }
  return {
    ok: true,
    data: {
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
      appointmentDate: appointment.date,
      appointmentTime: appointment.time,
      appointmentLabel: appointment.label,
    },
  };
}
