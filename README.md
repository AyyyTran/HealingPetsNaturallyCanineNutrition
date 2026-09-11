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

Vercel Hobby hosting costs $0. Andy's old approximately $7/month Heroku bill
goes away. Domain renewal remains the responsibility of the domain owner
(Karissa/the business) through its registrar; it is not Andy's hosting cost
and is not managed by this repository.

## Verification

```bash
npx vitest run
npm run build
```
