# 10 — Clerk Organizations

**Date:** Sep 6, 2026 — 7:18 PM

## What changed

### Clerk instance
- Ran `npx clerk@latest enable orgs` against the dev instance (`browser_automation`, `ins_3IwTArHSCqv4rjUHVCwjqIVnmrO`)
- Organizations are now enabled with the default **Membership required** mode
- This means: signed-in users without an active org are routed through the `choose-organization` session task before reaching the app

### `app/(auth)/choose-organization/page.tsx` (new)
- Renders `<TaskChooseOrganization redirectUrlComplete="/dashboard" />` from `@clerk/nextjs`
- Lives in the `(auth)` group (outside the `auth.protect()` layout) since it's part of the session task auth flow
- URL: `/choose-organization`

### `app/layout.tsx`
- Added `taskUrls={{ "choose-organization": "/choose-organization" }}` to `<ClerkProvider>`
- This tells Clerk where to send users when the `choose-organization` session task is triggered

## Auth flow (post-sign-in)

1. User signs in → Clerk checks for active org membership
2. If no org → routed to `/choose-organization` (session task)
3. User creates or selects an org → redirected to `/dashboard`
4. If org exists → goes directly to `/dashboard`
