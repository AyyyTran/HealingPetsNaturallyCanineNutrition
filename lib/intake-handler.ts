import { formatIntakeEmail } from "./email";
import { parseIntake } from "./intake";
import { getTransport } from "./mailer";
import { allowIntake } from "./rate-limit";

export async function handleIntakePost(
  req: Request,
  allow: typeof allowIntake = allowIntake,
): Promise<Response> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, errors: { form: "invalid" } },
      { status: 400 },
    );
  }

  const parsed = parseIntake(body);
  if (!parsed.ok) {
    return Response.json(
      { ok: false, errors: parsed.errors },
      { status: 400 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allow(ip)) {
    return Response.json({ ok: false, error: "rate" }, { status: 429 });
  }

  const { subject, text } = formatIntakeEmail(parsed.data);
  const transport = getTransport();

  try {
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject,
      text,
    });
  } catch {
    return Response.json({ ok: false, error: "email" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
