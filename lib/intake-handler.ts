import { formatIntakeEmail } from "./email";
import { parseIntake } from "./intake";
import { getTransport } from "./mailer";
import { allowIntake } from "./rate-limit";

export async function handleIntakePost(req: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, errors: { form: "invalid" } },
      { status: 400 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowIntake(ip)) {
    return Response.json({ ok: false, error: "rate" }, { status: 429 });
  }

  const parsed = parseIntake(body);
  if (!parsed.ok) {
    return Response.json(
      { ok: false, errors: parsed.errors },
      { status: 400 },
    );
  }

  const { subject, text, clientSubject, clientText } = formatIntakeEmail(
    parsed.data,
  );
  const transport = getTransport();

  try {
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject,
      text,
    });
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: parsed.data.email,
      subject: clientSubject,
      text: clientText,
    });
  } catch {
    return Response.json({ ok: false, error: "email" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
