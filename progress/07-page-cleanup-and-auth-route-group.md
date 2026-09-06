# 07 — Page Cleanup & Auth Route Group

**Date:** Sep 6, 2026 — 6:49 PM

## What changed

### `app/page.tsx`
- Stripped all existing scaffold content (button, toast demo, dark-mode hint)
- Now renders only `<UserButton />` from `@clerk/nextjs`
- Removed `"use client"` directive — page is a plain Server Component

### Auth routes reorganised under `(auth)` route group
- Created `app/(auth)/sign-in/[[...sign-in]]/page.tsx`
- Created `app/(auth)/sign-up/[[...sign-up]]/page.tsx`
- Deleted the old flat `app/sign-in/` and `app/sign-up/` directories
- URLs are unchanged (`/sign-in`, `/sign-up`) — route groups don't affect the URL

## Why

Grouping sign-in and sign-up under `(auth)` mirrors the existing `(protected)` group, giving the router a clear two-segment mental model: public auth flow vs. protected app.
