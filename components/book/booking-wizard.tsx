"use client";

import { useState, type ChangeEvent } from "react";
import { parseIntake, type Intake } from "@/lib/intake";
import { getPlan, PLANS, type PlanId } from "@/lib/plans";
import { CalEmbed } from "./cal-embed";

export type BookingForm = Intake & { website: string };

type BookingStep = 1 | 2 | 3 | 4 | 5 | 6;
type FormErrors = Record<string, string>;

const INITIAL_FORM: BookingForm = {
  planId: "" as PlanId,
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
  website: "",
};

const STEP_LABELS = ["Plan", "You", "Dog", "Health", "Deposit", "Time"];
const STEP_FIELDS: Record<number, (keyof BookingForm)[]> = {
  1: ["planId"],
  2: ["name", "address", "email", "phone"],
  3: ["petName", "breed"],
  4: ["allergies", "weight", "issues", "raw"],
  5: [
    "planId",
    "name",
    "address",
    "email",
    "phone",
    "petName",
    "breed",
    "allergies",
    "weight",
    "issues",
    "raw",
  ],
};

export function validateBookingStep(
  form: BookingForm,
  step: number,
): FormErrors {
  const parsed = parseIntake(form);
  if (parsed.ok) return {};
  const fields = STEP_FIELDS[step] ?? [];
  return Object.fromEntries(
    Object.entries(parsed.errors).filter(([field]) =>
      fields.includes(field as keyof BookingForm),
    ),
  );
}

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

const fieldClass =
  "mt-2 w-full rounded-lg border border-darkblue/25 bg-white px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20";

export function BookingWizard() {
  const [step, setStep] = useState<BookingStep>(1);
  const [form, setForm] = useState<BookingForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update =
    (field: keyof BookingForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    };

  const continueFrom = (currentStep: BookingStep) => {
    const nextErrors = validateBookingStep(form, currentStep);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0 && currentStep < 5) {
      setStep((currentStep + 1) as BookingStep);
    }
  };

  const sendIntake = async () => {
    const nextErrors = validateBookingStep(form, 5);
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    const result = await submitIntake(form);
    setSending(false);
    if (!result.ok) {
      setErrors(result.errors);
      setSubmitError(
        result.error === "rate"
          ? "Too many attempts. Please try again later."
          : "Couldn't send, try again.",
      );
      return;
    }
    setStep(6);
  };

  const plan = getPlan(form.planId);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Step {step} of 6
        </p>
        <ol className="mt-4 grid grid-cols-3 gap-2 text-sm sm:grid-cols-6">
          {STEP_LABELS.map((label, index) => (
            <li
              className={
                index + 1 === step
                  ? "rounded-full bg-darkblue px-3 py-2 text-center text-white"
                  : "rounded-full bg-grey px-3 py-2 text-center text-darkblue/65"
              }
              key={label}
            >
              {label}
            </li>
          ))}
        </ol>
      </div>

      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        {step === 1 && (
          <>
            <h1 className="text-3xl font-semibold">Choose your plan</h1>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {PLANS.map((option) => (
                <button
                  aria-pressed={form.planId === option.id}
                  className={`rounded-xl border p-6 text-left transition ${
                    form.planId === option.id
                      ? "border-secondary bg-accent/15 ring-2 ring-secondary"
                      : "border-darkblue/15 hover:border-secondary"
                  }`}
                  key={option.id}
                  onClick={() => {
                    setForm((current) => ({
                      ...current,
                      planId: option.id,
                    }));
                    setErrors({});
                  }}
                  type="button"
                >
                  <h2 className="text-xl font-semibold">{option.name}</h2>
                  <p className="mt-2 text-lg font-semibold">
                    ${option.priceCad} CAD
                  </p>
                  <p className="text-sm text-darkblue/70">
                    {option.durationMin} minutes
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {option.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                className="rounded-full bg-secondary px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
                disabled={!form.planId}
                onClick={() => continueFrom(1)}
                type="button"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <StepPanel
            title="Tell us about you"
            onBack={() => setStep(1)}
            onContinue={() => continueFrom(2)}
          >
            <Field label="Name" error={errors.name}>
              <input
                className={fieldClass}
                value={form.name}
                onChange={update("name")}
              />
            </Field>
            <Field label="Address" error={errors.address}>
              <input
                className={fieldClass}
                value={form.address}
                onChange={update("address")}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className={fieldClass}
                type="email"
                value={form.email}
                onChange={update("email")}
              />
            </Field>
            <Field label="Phone" error={errors.phone} helper="000-000-0000">
              <input
                className={fieldClass}
                inputMode="tel"
                value={form.phone}
                onChange={update("phone")}
              />
            </Field>
          </StepPanel>
        )}

        {step === 3 && (
          <StepPanel
            title="Tell us about your dog"
            onBack={() => setStep(2)}
            onContinue={() => continueFrom(3)}
          >
            <Field label="Pet name" error={errors.petName}>
              <input
                className={fieldClass}
                value={form.petName}
                onChange={update("petName")}
              />
            </Field>
            <Field label="Breed" error={errors.breed}>
              <input
                className={fieldClass}
                value={form.breed}
                onChange={update("breed")}
              />
            </Field>
          </StepPanel>
        )}

        {step === 4 && (
          <StepPanel
            title="Health details"
            intro="Please fill out all the fields with as much detail as possible as I can prepare more accurate advice and to save time for the actual consultation"
            onBack={() => setStep(3)}
            onContinue={() => continueFrom(4)}
          >
            <Field
              label="Please list/describe any allergies/intolerance's your pet has. Food and supplements it has taken and is currently taking."
              error={errors.allergies}
            >
              <textarea
                className={fieldClass}
                rows={4}
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
                rows={4}
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
                rows={4}
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
                rows={3}
                value={form.raw}
                onChange={update("raw")}
              />
            </Field>
            <Field label="Any Questions or Concerns?" error={errors.qa}>
              <textarea
                className={fieldClass}
                rows={3}
                value={form.qa}
                onChange={update("qa")}
              />
            </Field>
          </StepPanel>
        )}

        {step === 5 && (
          <>
            <h1 className="text-3xl font-semibold">Deposit</h1>
            <div className="mt-6 rounded-xl bg-accent/20 p-6">
              <p className="font-bold">
                NOTE: ALL APPOINTMENTS REQUIRE A $30 DEPOSIT TO BE BOOKED.
              </p>
              <p className="mt-3">
                E-Transfer deposit to info@healingpetsnutrition.com
              </p>
            </div>
            {submitError && (
              <p className="mt-5 text-sm font-semibold text-red-700" role="alert">
                {submitError}
              </p>
            )}
            {Object.keys(errors).length > 0 && (
              <ul className="mt-3 text-sm text-red-700">
                {Object.entries(errors).map(([field, error]) => (
                  <li key={field}>{error}</li>
                ))}
              </ul>
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
            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                className="rounded-full border border-secondary px-6 py-3 font-semibold text-secondary"
                onClick={() => setStep(4)}
                type="button"
              >
                Back
              </button>
              <button
                className="rounded-full bg-secondary px-6 py-3 font-semibold text-white disabled:opacity-50"
                disabled={sending}
                onClick={sendIntake}
                type="button"
              >
                {sending ? "Sending…" : "Continue to pick a time"}
              </button>
            </div>
          </>
        )}

        {step === 6 && plan && (
          <>
            <h1 className="mb-8 text-3xl font-semibold">Pick a time</h1>
            <CalEmbed
              planId={plan.id}
              name={form.name}
              email={form.email}
              notes={`Plan: ${plan.name}. Pet: ${form.petName} (${form.breed}). Intake emailed to Karissa.`}
            />
          </>
        )}
      </section>
    </main>
  );
}

function StepPanel({
  title,
  intro,
  children,
  onBack,
  onContinue,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      {intro && <p className="mt-4 text-darkblue/75">{intro}</p>}
      <div className="mt-8 grid gap-6">{children}</div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          className="rounded-full border border-secondary px-6 py-3 font-semibold text-secondary"
          onClick={onBack}
          type="button"
        >
          Back
        </button>
        <button
          className="rounded-full bg-secondary px-6 py-3 font-semibold text-white"
          onClick={onContinue}
          type="button"
        >
          Continue
        </button>
      </div>
    </>
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
    <label className="block font-medium">
      {label}
      {children}
      {helper && <span className="mt-1 block text-sm text-darkblue/60">{helper}</span>}
      {error && (
        <span className="mt-1 block text-sm text-red-700" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
