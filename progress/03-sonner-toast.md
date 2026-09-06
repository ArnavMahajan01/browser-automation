# 03 — Sonner Toast Integration

**Date:** Sep 6, 2026 — 9:43 AM

## What changed

- Imported `Toaster` from `components/ui/sonner` into `app/layout.tsx`
- Rendered `<Toaster />` inside `ThemeProvider` so it inherits the active theme
- Converted `app/page.tsx` to a client component (`"use client"`)
- Wired the demo button's `onClick` to `toast("Button clicked!")` from `sonner`

## Result

Clicking the button on the home page fires a toast notification. The toast respects dark/light mode automatically.
