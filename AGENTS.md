<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-state -->
# Project State (keep this up to date every session)

## What this project is
An AI-powered browser automation platform (Next.js 16, App Router). Users sign in, describe automation tasks, the app executes them. All routes behind auth except the auth flow itself.

## Tech stack
- **Framework:** Next.js 16 (App Router) — middleware file is `proxy.ts`, NOT `middleware.ts`
- **Auth:** Clerk (`@clerk/nextjs`) — Organizations enabled, Membership required mode
- **UI:** shadcn/ui + Tailwind CSS v4
- **Notifications:** Sonner

## Route structure
```
app/
  layout.tsx                         # ClerkProvider (taskUrls set), ThemeProvider, Toaster
  (auth)/
    sign-in/[[...sign-in]]/page.tsx  # Public
    sign-up/[[...sign-up]]/page.tsx  # Public
    choose-organization/page.tsx     # Session task — org selection (public, auth-flow)
  (protected)/
    layout.tsx                       # auth.protect() — guards all routes in this group
    page.tsx                         # Home /
    dashboard/page.tsx               # /dashboard
proxy.ts                             # bare clerkMiddleware() — session hydration only
```

## Auth rules
- `proxy.ts` runs bare `clerkMiddleware()` — NO `createRouteMatcher` (deprecated in this SDK version)
- All protection is resource-based: `(protected)/layout.tsx` calls `auth.protect()`
- New protected routes → add inside `(protected)/`; new public routes → add inside `(auth)/` or at root
- `ClerkProvider` has `taskUrls={{ "choose-organization": "/choose-organization" }}`
- After sign-in, users without an org are routed to `/choose-organization` (TaskChooseOrganization) → redirects to `/dashboard`

## Clerk instance
- App: `browser_automation` (`app_3IwTAqpT3KGuF7bZu4YxL2xxhJN`)
- Dev instance: `ins_3IwTArHSCqv4rjUHVCwjqIVnmrO`
- Organizations: enabled (Membership required)
- CLI: use `npx -y clerk@latest <command>` (no global `clerk` binary)

## Conventions
- Every new feature gets a progress file in `progress/` (next number: 11)
- Progress table in `README.md` must be updated after every session
- This AGENTS.md section must be updated after every session
- `.agents/`, `.claude/`, `skills-lock.json` are gitignored (local AI tooling only)
<!-- END:project-state -->
