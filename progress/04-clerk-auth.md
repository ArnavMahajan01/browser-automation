# 04 — Clerk Authentication

**Date:** Sep 6, 2026 — 4:01 PM

## What changed

- Ran `npx clerk@latest init` which installed `@clerk/nextjs` and generated `proxy.ts`
- `proxy.ts` is the Next.js 16+ equivalent of `middleware.ts` — Clerk middleware runs here
- Wrapped the app in `<ClerkProvider appearance={{ theme: shadcn }}>` with the shadcn/ui theme
- Added a `<header>` in the root layout with:
  - `<SignInButton>` and `<SignUpButton>` shown when signed out (via `<Show when="signed-out">`)
  - `<UserButton>` shown when signed in (via `<Show when="signed-in">`)
- Added sign-in page at `app/sign-in/[[...sign-in]]/page.tsx`
- Added sign-up page at `app/sign-up/[[...sign-up]]/page.tsx`
- Added protected route group `app/(protected)/` with:
  - `layout.tsx` calling `auth.protect()` server-side
  - `dashboard/page.tsx` as the first protected page
- `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` added to `.env.local`

## How auth works

Clerk middleware (`proxy.ts`) intercepts every request. Protected routes double-check via `auth.protect()` in the route group layout. Clerk UI components handle the sign-in / sign-up flow automatically.
