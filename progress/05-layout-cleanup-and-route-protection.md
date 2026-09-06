# 05 — Layout Cleanup & Protected-First Routing

**Date:** Sep 6, 2026 — 6:39 PM

## What changed

### `app/layout.tsx`
- Removed the `<header>` block containing `<Show>`, `<SignInButton>`, `<SignUpButton>`, `<UserButton>`
- Root layout now only contains: `ClerkProvider`, `ThemeProvider`, `Toaster`, and font setup
- Auth UI is no longer rendered globally — each page/layout manages its own UI

### `proxy.ts`
- Initially added `createRouteMatcher` — later removed (see 06)
- Middleware now runs as a bare `clerkMiddleware()` for session hydration only

## Why

The root layout should be a neutral shell. Auth controls (sign in/out buttons, user avatars) belong on specific pages or feature layouts, not globally.
