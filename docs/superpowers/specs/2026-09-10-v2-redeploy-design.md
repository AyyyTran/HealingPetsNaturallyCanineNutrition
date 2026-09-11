# Healing Pets Naturally V2 — Redesign and Free Redeploy

Date: 2026-09-10  
Status: Approved  
Site: https://www.healingpetsnaturallycaninenutrition.com/

## Goal

Keep the site live on the existing custom domain at $0/month hosting. Rebuild as V2: same copy, logos, photos, and client-facing features as V1, with a cleaner booking flow. Replace the dead Heroku API and homemade calendar.

Andy’s only hosting cost was Heroku (~$7/month). That goes away. The custom domain already points at Vercel; whoever bought it (almost certainly Karissa / the business) pays the registrar renewal, not Andy. Do not assume Andy has a domain invoice. Hosting and Cal.com stay $0.

## Current state (V1)

- Frontend is already on Vercel at the custom domain. Apex redirects to `www`.
- Backend was Express on Heroku (`healing-pets-backend-4102006eeea7.herokuapp.com`). That app is gone (“No such app”).
- Contact form, appointment picker, and Karissa’s blocked-date admin all pointed at Heroku, so those features are dead.
- Stack: Create React App, Tailwind, MUI date picker, Express, MongoDB, Nodemailer/Gmail.
- Karissa is hands-off except email; Andy will explain V2 on a short call so she can connect Google Calendar.

## Constraints

- No paid hosting. Vercel Hobby for the site; Cal.com Free for scheduling; existing Gmail for intake email.
- Vercel Hobby is personal/non-commercial in their terms. This business site is already on Vercel. Stay put; Cloudflare is the fallback only if Vercel flags the project.
- Do not degrade client-facing V1 features.
- Karissa will hop on once to connect her Google Calendar. Until then, Andy’s Cal.com is used for development and first production.

## Architecture

Rebuild the frontend as a Next.js App Router app on the existing Vercel project and domain. No Heroku, no Express server, no MongoDB.

```
Visitor → www.healingpetsnaturallycaninenutrition.com (Vercel)
            │
            ├─ `/`  marketing page (existing sections and copy)
            └─ `/book`
                 1. Multi-step intake
                 2. POST /api/intake → Gmail to Karissa (+ copy to client)
                 3. Cal.com embed for the chosen plan
                 4. Cal.com writes the meeting to her Google Calendar
```

Two jobs, two systems:

| Job | Owner |
|-----|--------|
| Dog intake form + email | Our Next.js app (`/api/intake`) |
| Live availability + booking | Cal.com + Karissa’s Google Calendar |

Cal.com is not our backend. It is the appointment picker (Calendly-style). Intake answers never depend on Mongo.

### Env vars

- `EMAIL_USER`, `EMAIL_PASSWORD` — Gmail SMTP login (app password), same role as Heroku.
- `CLIENT_EMAIL` — inbox that receives intakes (`info@healingpetsnutrition.com`).
- `NEXT_PUBLIC_CAL_USERNAME` — Andy’s Cal.com username.
- `NEXT_PUBLIC_CAL_EVENT_SUPPLEMENT`, `NEXT_PUBLIC_CAL_EVENT_NUTRITION`, `NEXT_PUBLIC_CAL_EVENT_PREMIUM` — event-type slugs.

Because production uses **Andy’s Cal.com + Karissa’s Google Calendar**, those Cal.com values do not change after her call. Connecting her Google happens inside Cal.com. Env vars only change if a second Cal.com account is created later.

## Booking flow

“Book Now” and “Let’s Talk” go to `/book`, not a form at the bottom of the home page.

1. **Plan** — Supplement $75 / Nutrition $120 / Premium $160 (missing from the V1 form).
2. **You** — name, email, phone, address.
3. **Dog** — pet name, breed.
4. **Health** — same V1 questions: allergies/supplements, activity/weight/food amount, health issues, open to raw/homemade, questions/concerns.
5. **Deposit** — $30 e-transfer to `info@healingpetsnutrition.com` to reserve; remainder on first consult; e-transfer only.
6. **Time** — Cal.com embed for that plan’s event type. Prefill name and email. Pass pet name and plan in booking notes.

Submit on step 5 sends the intake email, then shows the calendar. If they leave before picking a slot, Karissa still has the lead.

### Cal.com setup

Andy creates the free Cal.com account and three event types:

- Hours: 9:00–17:00 America/Los_Angeles
- Minimum notice: next day (no same-day), matching V1
- Slot step: 60 minutes for display sanity; event length follows the plan

On Karissa’s call:

1. Explain the new site and that bookings land on her Google Calendar.
2. She signs into Google and clicks Allow on Cal.com.
3. Conflict calendar and destination calendar = her primary calendar (confirm which calendars to check).
4. Confirm a busy block on her calendar hides that slot on `/book`. No Vercel env change unless the Cal.com username itself changes.

Busy Google events hide those slots automatically. Events marked **Free** do not block. Date overrides in Cal.com still work if Andy needs to block a day without her adding a Google event.

If Google connect slips, Andy’s calendar remains a valid temporary source of truth.

## Look and feel

Not a new brand. Keep:

- Colors: primary `#6D9DC5`, secondary `#467FAF`, accent `#99BAD6`, dark blue `#102542`, grey `#F5F5F5`, off-white `#FAF9F6`
- Font: General Sans
- Logos (`logo.svg`, `logo-transparent.svg`)
- Photos and certification images (pull from the live site if they are missing from git)
- All marketing copy, plan prices, reviews, medical disclaimer, footer email

Improve layout only: spacing, mobile nav, plan cards, review blocks, and a phone-friendly wizard.

Home remains one scrolling page, in order: hero, about, certifications, info, services, plans, reviews, disclaimer, footer.

## Feature parity

| V1 | V2 |
|----|----|
| Copy, logos, photos, plans, reviews, disclaimer | Same |
| Intake fields | Same, stepped; plan choice added |
| Date/time (tomorrow+, 9–5 PT, hourly) | Cal.com event types with those rules |
| Blocked dates | Busy time on her Google Calendar (or Cal.com override) |
| $30 e-transfer note | Deposit step |
| Email to the business | Same, plus a copy to the client |
| Public password to block dates | Removed; availability is not managed on the website |

Client-facing behavior does not shrink. Admin moves off the public page.

## Errors and abuse

- Validate each wizard step before continuing.
- If `/api/intake` fails: keep answers on screen, show retry, **do not** open Cal.com. A booking without an intake email is worse than a delay.
- If the Cal.com embed fails: show a fallback link to the event URL.
- Rate-limit `/api/intake`. Add a honeypot field. No secrets in the browser.

## What we delete

Heroku, Express, Mongo/unavailable-dates, MUI appointment picker, `ManageUnavailableDates`, hardcoded Heroku URLs, the public password field.

## Verification

Before calling it live:

- `/` and `/book` on desktop and a phone-sized viewport
- Test intake arrives at `CLIENT_EMAIL` and the client copy arrives
- Test booking appears on the connected Cal.com/Google Calendar
- Deposit copy is visible before the calendar
- No remaining Heroku URLs
- After Karissa’s call: a real **Busy** event on her connected Google Calendar hides that slot

## Out of scope

- Paid Vercel Pro, Cloudflare migration (unless Hobby is later restricted)
- Online card payments (e-transfer stays)
- Replacing Gmail with another mail vendor
- Rewriting Karissa’s wording or brand
- Building a website admin for blocked dates
