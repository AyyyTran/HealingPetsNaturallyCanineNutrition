import { getPlan } from "./plans";
import type { Intake } from "./intake";

export function formatIntakeEmail(intake: Intake) {
  const plan = getPlan(intake.planId);
  const planLabel = plan
    ? `${plan.name} ($${plan.priceCad} CAD, ${plan.durationMin} min)`
    : intake.planId;

  const subject = `New consultation intake: ${plan?.name ?? intake.planId} — ${intake.petName}`;
  const text = [
    "New Healing Pets Naturally intake",
    "",
    `Plan: ${planLabel}`,
    `Name: ${intake.name}`,
    `Address: ${intake.address}`,
    `Email: ${intake.email}`,
    `Phone: ${intake.phone}`,
    `Pet name: ${intake.petName}`,
    `Breed: ${intake.breed}`,
    "",
    "Allergies / supplements:",
    intake.allergies,
    "",
    "Activity / weight / food:",
    intake.weight,
    "",
    "Health issues:",
    intake.issues,
    "",
    "Open to raw or homemade:",
    intake.raw,
    "",
    "Questions:",
    intake.qa || "(none)",
  ].join("\n");

  const clientSubject = "We received your consultation request";
  const clientText = [
    `Hi ${intake.name},`,
    "",
    `Thank you for requesting the ${plan?.name ?? "consultation"} for ${intake.petName}.`,
    "",
    "Next step: pick a time on the calendar. To reserve the appointment, send a $30 e-transfer deposit to info@healingpetsnutrition.com. The remainder is paid on the first day of consultation. We only accept e-transfers.",
    "",
    "Karissa will also receive the health details you submitted.",
    "",
    "Healing Pets Naturally Canine Nutrition",
  ].join("\n");

  return { subject, text, clientSubject, clientText };
}
