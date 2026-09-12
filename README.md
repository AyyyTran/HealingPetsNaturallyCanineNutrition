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

`CLIENT_EMAIL` is the inbox that receives contact-form submissions
(`info@healingpetsnutrition.com`).

## Booking

`/book` is the V1 contact form: personal info, pet intake, a requested
date/time (tomorrow or later, 9:00 AM–5:00 PM Pacific, on the hour), and the
$30 e-transfer deposit note. Submit emails that to `CLIENT_EMAIL`. There is no
live calendar booking. Karissa follows up by email.

## Vercel deployment

The Vercel project's Root Directory must be the repository root (`.` or an
empty Root Directory), **not** `frontend`. The production domain is already
attached. Deploy through the Git integration, or run `vercel --prod` while
authenticated to the correct Vercel account.

Set `EMAIL_USER`, `EMAIL_PASSWORD`, and `CLIENT_EMAIL` on Vercel.

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
- [ ] Form validates required fields
- [ ] Successful submit emails Karissa
- [ ] Failed submit stays on the form with retry
- [ ] Deposit copy visible on the form
- [ ] `rg herokuapp` in `app/`, `components/`, `lib/`, `README` finds nothing
      (historical mentions may remain in `docs/superpowers` V1 context)
