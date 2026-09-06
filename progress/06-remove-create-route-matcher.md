# 06 — Remove createRouteMatcher (deprecated)

**Date:** Sep 6, 2026 — 6:47 PM

## What changed

- Removed `createRouteMatcher` and the public-route logic from `proxy.ts`
- `proxy.ts` is now a bare `clerkMiddleware()` — it runs for session hydration only

## Why

`createRouteMatcher` is marked `@deprecated` in `@clerk/nextjs` v7. The official guidance is to move auth checks into each page, layout, or API route instead of path-matching in middleware. Path matching in middleware can diverge from how Next.js actually routes requests, leaving gaps.

## How protection now works

- `app/(protected)/layout.tsx` calls `auth.protect()` server-side — this guards every route under `(protected)/`
- Any future protected page or API route calls `auth.protect()` or `await auth()` directly
- No centralised path list to maintain or keep in sync
