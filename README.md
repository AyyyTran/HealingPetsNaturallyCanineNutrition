# Healing Pets Naturally Canine Nutrition

A Next.js website and consultation-booking flow for Healing Pets Naturally
Canine Nutrition.

## Local development

Install dependencies and start the development server:

```bash
npm install && npm run dev
```

Copy `.env.example` to `.env.local` and configure:

- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `CLIENT_EMAIL`
- `NEXT_PUBLIC_CAL_USERNAME`
- `NEXT_PUBLIC_CAL_EVENT_SUPPLEMENT`
- `NEXT_PUBLIC_CAL_EVENT_NUTRITION`
- `NEXT_PUBLIC_CAL_EVENT_PREMIUM`

## Cal.com setup

Use Andy's Cal.com account and create three event types for the 45-, 60-, and
90-minute consultation plans. Set availability to 9:00–17:00 in
`America/Los_Angeles`, with minimum notice requiring bookings to be made no
earlier than the next day.

Before Karissa takes calls, connect her Google Calendar in Cal.com as both the
conflict calendar and the destination calendar.

## Vercel deployment

The Vercel project's Root Directory must be the repository root (`.` or an
empty Root Directory), **not** `frontend`. The production domain is already
attached. Deploy through the Git integration, or run `vercel --prod` while
authenticated to the correct Vercel account.

Andy does not pay the domain registrar. Karissa/the business owns the domain
and pays whatever the registrar charges to renew it. Andy's only old hosting
cost was Heroku (~$7/month); that goes away. Vercel Hobby is $0.

## Verification

Automated checks:

```bash
npx vitest run
npm run build
```

Manual checklist before go-live:

- [ ] `/` and `/book` on desktop and a phone-sized viewport
- [ ] Wizard validates each step
- [ ] Successful intake emails Karissa and the client, then shows Cal.com
- [ ] Failed intake stays on the deposit step with retry (Cal.com does not open)
- [ ] Deposit copy visible before the calendar
- [ ] Scheduler fallback "Open scheduler" link on the calendar step
- [ ] `rg herokuapp` in `app/`, `components/`, `lib/`, `README` finds nothing
      (historical mentions may remain in `docs/superpowers` V1 context)
