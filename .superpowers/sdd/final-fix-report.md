# Whole-branch Important Fixes

## Changes

- Reject email values containing recipient delimiters or address-header syntax.
- Send the client copy to a structured Nodemailer address.
- Normalize ten-digit phone inputs to `XXX-XXX-XXXX`.
- Rate-limit only validated intake requests and expose distinct 429 wizard copy.
- Document build-time Cal.com public variables.
- Disable generated Next.js agent rules and ignore generated agent files.

## Verification

Command:

```text
npx vitest run && npm run build
```

Result:

```text
Test Files  6 passed (6)
Tests       26 passed (26)

Next.js 16.3.4 (Turbopack)
Compiled successfully
Finished TypeScript
Generated static pages (5/5)

Routes: /, /_not-found, /api/intake, /book
Exit code: 0
```
