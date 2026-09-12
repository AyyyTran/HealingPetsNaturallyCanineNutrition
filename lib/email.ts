import type { Intake } from "./intake";

export function formatIntakeEmail(intake: Intake) {
  const subject = "Contact Form Details";
  const text = [
    "Contact form info",
    "",
    `Requested appointment: ${intake.appointmentLabel}`,
    "",
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
    intake.raw || "(none)",
    "",
    "Questions:",
    intake.qa || "(none)",
    "",
    "NOTE: ALL APPOINTMENTS REQUIRE A $30 DEPOSIT TO BE BOOKED.",
    "E-Transfer deposit to info@healingpetsnutrition.com",
  ].join("\n");

  return { subject, text };
}
