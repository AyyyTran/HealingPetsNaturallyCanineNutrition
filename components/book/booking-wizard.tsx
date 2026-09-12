"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  APPOINTMENT_HOURS,
  minAppointmentDate,
} from "@/lib/appointment";
import { parseIntake } from "@/lib/intake";
import { formatPhoneInput } from "@/lib/phone";

export type BookingForm = {
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
  website: string;
};

type FormErrors = Record<string, string>;

const INITIAL_FORM: BookingForm = {
  name: "",
  address: "",
  email: "",
  phone: "",
  petName: "",
  breed: "",
  allergies: "",
  weight: "",
  issues: "",
  raw: "",
  qa: "",
  appointmentDate: "",
  appointmentTime: "",
  website: "",
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-darkblue/25 bg-white px-4 py-3 text-darkblue outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20";

export async function submitIntake(
  form: BookingForm,
  fetcher: typeof fetch = fetch,
): Promise<{ ok: boolean; errors: FormErrors; error?: "rate" }> {
  try {
    const res = await fetcher("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.status === 200) return { ok: true, errors: {} };
    if (res.status === 429) {
      return { ok: false, errors: {}, error: "rate" };
    }

    const body = (await res.json().catch(() => null)) as {
      errors?: FormErrors;
    } | null;
    return { ok: false, errors: body?.errors ?? {} };
  } catch {
    return { ok: false, errors: {} };
  }
}

function hourLabel(time: string) {
  const hour = Number(time.slice(0, 2));
  const meridiem = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:00 ${meridiem}`;
}

export function BookingWizard() {
  const [form, setForm] = useState<BookingForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [sent, setSent] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(minAppointmentDate());
  }, []);

  const update =
    (field: keyof BookingForm) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const value =
        field === "phone"
          ? formatPhoneInput(event.target.value)
          : event.target.value;
      setForm((current) => ({ ...current, [field]: value }));
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const parsed = parseIntake(form);
    if (!parsed.ok) {
      setErrors(parsed.errors);
      setSubmitError("");
      return;
    }

    setSending(true);
    setSubmitError("");
    const result = await submitIntake(form);
    setSending(false);
    if (!result.ok) {
      setErrors(result.errors);
      setSubmitError(
        result.error === "rate"
          ? "Too many attempts. Please try again later."
          : "Something Went Wrong. Try Again Later!",
      );
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <section className="rounded-2xl bg-white p-6 text-center shadow-sm sm:p-10">
          <h1 className="text-3xl font-semibold">Email Sent Successfully!</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <section className="rounded-2xl bg-primary p-6 text-white shadow-sm sm:p-10">
        <h1 className="text-3xl font-semibold text-darkblue">Contact Us</h1>
        <form className="mt-8 grid gap-6" onSubmit={onSubmit}>
          <p className="text-lg">Personal Information</p>
          <Field label="Name:" error={errors.name}>
            <input
              autoComplete="name"
              className={fieldClass}
              placeholder="John Doe"
              required
              value={form.name}
              onChange={update("name")}
            />
          </Field>
          <Field label="Address:" error={errors.address}>
            <input
              autoComplete="street-address"
              className={fieldClass}
              placeholder="123 Main St, City"
              required
              value={form.address}
              onChange={update("address")}
            />
          </Field>
          <Field label="Email:" error={errors.email}>
            <input
              autoComplete="email"
              className={fieldClass}
              placeholder="john.doe@example.com"
              required
              type="email"
              value={form.email}
              onChange={update("email")}
            />
          </Field>
          <Field label="Phone:" error={errors.phone}>
            <input
              autoComplete="tel"
              className={fieldClass}
              inputMode="numeric"
              maxLength={12}
              placeholder="123-456-7890"
              required
              type="tel"
              value={form.phone}
              onChange={update("phone")}
            />
          </Field>

          <p className="mt-4 text-lg">Pet Information</p>
          <p>
            Please fill out all the fields with as much detail as possible as I
            can prepare more accurate advice and to save time for the actual
            consultation
          </p>
          <Field label="Pet Name:" error={errors.petName}>
            <input
              className={fieldClass}
              placeholder="Rusty"
              required
              value={form.petName}
              onChange={update("petName")}
            />
          </Field>
          <Field label="Pet Breed:" error={errors.breed}>
            <input
              className={fieldClass}
              placeholder="Labrador"
              required
              value={form.breed}
              onChange={update("breed")}
            />
          </Field>
          <Field
            label="Please list/describe any allergies/intolerance's your pet has. Food and supplements it has taken and is currently taking."
            error={errors.allergies}
          >
            <textarea
              className={fieldClass}
              placeholder="Ex: Allergic to fish, chicken and has troubles digesting seeds. Currently being fed dog food and no supplements."
              required
              rows={8}
              value={form.allergies}
              onChange={update("allergies")}
            />
          </Field>
          <Field
            label="Please describe how active your pet is. What is the current weight and ideal weight of your pet. How much food do you feed it?"
            error={errors.weight}
          >
            <textarea
              className={fieldClass}
              placeholder="Ex: Rusty is not very active. Only an hour of outside time daily. Currently weighs 150lbs but want him to be a healthier weight. Currently fed 3 meals a day plus dog treats and dental stick."
              required
              rows={8}
              value={form.weight}
              onChange={update("weight")}
            />
          </Field>
          <Field
            label="Please describe all previous or current health issues of your pet."
            error={errors.issues}
          >
            <textarea
              className={fieldClass}
              placeholder="Ex: Rusty used to have obesity and now is struggling with arthritis."
              required
              rows={8}
              value={form.issues}
              onChange={update("issues")}
            />
          </Field>
          <Field
            label="Are you open to Raw or Homemade foods?"
            error={errors.raw}
          >
            <textarea
              className={fieldClass}
              placeholder="Ex: Yes, we are open to including some raw or homemade foods into the diet."
              rows={6}
              value={form.raw}
              onChange={update("raw")}
            />
          </Field>
          <Field label="Any Questions or Concerns?" error={errors.qa}>
            <textarea
              className={fieldClass}
              rows={6}
              value={form.qa}
              onChange={update("qa")}
            />
          </Field>

          <p className="pt-4 text-center text-3xl font-bold">
            Book An Appointment Date & Time!
          </p>
          <p className="text-center text-xl font-bold">
            NOTE: ALL APPOINTMENTS REQUIRE A $30 DEPOSIT TO BE BOOKED.
          </p>
          <p className="text-center text-xl font-bold">
            E-Transfer deposit to info@healingpetsnutrition.com
          </p>
          <Field label="Appointment date" error={errors.appointmentDate}>
            <input
              className={fieldClass}
              min={minDate}
              required
              type="date"
              value={form.appointmentDate}
              onChange={update("appointmentDate")}
            />
          </Field>
          <Field label="Appointment time (Pacific)">
            <select
              className={fieldClass}
              required
              value={form.appointmentTime}
              onChange={update("appointmentTime")}
            >
              <option value="">Choose a time</option>
              {APPOINTMENT_HOURS.map((hour) => (
                <option key={hour} value={hour}>
                  {hourLabel(hour)}
                </option>
              ))}
            </select>
          </Field>

          {submitError && (
            <p className="rounded-lg bg-white p-3 font-semibold text-red-700" role="alert">
              {submitError}
            </p>
          )}
          <input
            aria-hidden="true"
            autoComplete="off"
            className="absolute -left-[9999px] h-px w-px"
            name="website"
            tabIndex={-1}
            value={form.website}
            onChange={update("website")}
          />
          <button
            className="mx-auto my-4 w-32 rounded-lg bg-white p-2 font-bold text-darkblue disabled:opacity-50"
            disabled={sending}
            type="submit"
          >
            {sending ? "Sending…" : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
}

function Field({
  label,
  helper,
  error,
  children,
}: {
  label: string;
  helper?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-start">
      {label}
      {children}
      {helper && (
        <span className="mt-1 block text-sm text-white/80">{helper}</span>
      )}
      {error && (
        <span className="mt-1 block text-sm font-semibold text-red-100" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
