const TIME_ZONE = "America/Los_Angeles";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^(\d{2}):(\d{2})$/;

export const APPOINTMENT_HOURS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
] as const;

export type AppointmentOk = { ok: true; date: string; time: string; label: string };
export type AppointmentErr = { ok: false; error: string };
export type AppointmentResult = AppointmentOk | AppointmentErr;

function pacificDate(now: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

function addCalendarDays(ymd: string, days: number) {
  const [year, month, day] = ymd.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + days));
  return next.toISOString().slice(0, 10);
}

export function minAppointmentDate(now = new Date()) {
  return addCalendarDays(pacificDate(now), 1);
}

export function parseAppointment(
  date: string,
  time: string,
  now = new Date(),
): AppointmentResult {
  const trimmedDate = date.trim();
  const trimmedTime = time.trim();
  if (!trimmedDate || !DATE_RE.test(trimmedDate)) {
    return { ok: false, error: "Appointment date is required" };
  }
  if (!trimmedTime) {
    return { ok: false, error: "Appointment time is required" };
  }

  const match = TIME_RE.exec(trimmedTime);
  if (!match) {
    return { ok: false, error: "Choose a time on the hour between 9:00 AM and 5:00 PM Pacific" };
  }
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (minute !== 0 || hour < 9 || hour > 17) {
    return { ok: false, error: "Choose a time on the hour between 9:00 AM and 5:00 PM Pacific" };
  }

  if (trimmedDate < minAppointmentDate(now)) {
    return { ok: false, error: "Choose a date starting tomorrow" };
  }

  return {
    ok: true,
    date: trimmedDate,
    time: trimmedTime,
    label: formatPacificLabel(trimmedDate, hour),
  };
}

function formatPacificLabel(date: string, hour: number) {
  const meridiem = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  const prettyHour = `${hour12}:00 ${meridiem}`;
  const [year, month, day] = date.split("-").map(Number);
  const utcNoon = new Date(Date.UTC(year, month - 1, day, 20));
  const dateLabel = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(utcNoon);
  return `${dateLabel} at ${prettyHour} Pacific`;
}
