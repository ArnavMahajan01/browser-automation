# 08 — Homepage Protection

**Date:** Sep 6, 2026 — 7:07 PM

## What changed

### `app/(protected)/page.tsx` (was `app/page.tsx`)
- Moved the root `page.tsx` from the app root into the `(protected)` route group
- It now inherits the `auth.protect()` server-side guard from `(protected)/layout.tsx`
- URL is unchanged (`/`)

### `proxy.ts`
- Briefly added `createRouteMatcher` for a protected-first middleware strategy
- Reverted after Clerk SDK emitted a deprecation warning: `createRouteMatcher` is deprecated in favour of resource-level auth checks
- Final state: bare `clerkMiddleware()` (session hydration only — no route-matching logic)

## Why

The homepage rendered `<UserButton />` which makes no sense for unauthenticated users. Moving it into `(protected)` ensures unauthenticated visitors are immediately redirected to `/sign-in`. The `createRouteMatcher` approach was tried and abandoned because the current Clerk SDK version has deprecated it.

## Auth model (final)

| Route | Protection mechanism |
|---|---|
| `/` | `(protected)/layout.tsx` → `auth.protect()` |
| `/dashboard` | `(protected)/layout.tsx` → `auth.protect()` |
| `/sign-in` | Public — no guard |
| `/sign-up` | Public — no guard |
| `/choose-organization` | Public — session task flow |
