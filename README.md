# Browser Automation

An AI-powered browser automation platform. Users sign in, describe what they want automated in the browser, and the app executes it — without writing any code.

---

## What this app does

- Lets authenticated users submit browser automation tasks through a web UI
- Executes those tasks programmatically against real browsers
- Shows live status and results back to the user
- All automation runs behind authentication — no anonymous access

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI components | shadcn/ui + Radix UI |
| Styling | Tailwind CSS v4 |
| Auth | Clerk |
| Notifications | Sonner (toast) |
| Fonts | Geist + Geist Mono |

---

## Project structure

```
app/
  layout.tsx                         # Root shell — ClerkProvider (with taskUrls), ThemeProvider, Toaster
  (auth)/
    sign-in/[[...sign-in]]/page.tsx  # Clerk sign-in page (public)
    sign-up/[[...sign-up]]/page.tsx  # Clerk sign-up page (public)
    choose-organization/page.tsx     # Session task — org selection (public, auth-flow only)
  (protected)/
    layout.tsx                       # Server-side auth guard (auth.protect())
    page.tsx                         # Home / (protected)
    dashboard/page.tsx               # Main dashboard after sign-in

components/
  ui/                     # shadcn/ui component library (~50 components)
  theme-provider.tsx      # Dark/light mode provider

proxy.ts                  # Clerk middleware — session hydration only (bare clerkMiddleware())
lib/utils.ts              # cn() utility
```

---

## Auth & routing

- **Public routes:** `/sign-in`, `/sign-up`, `/choose-organization` (session task only)
- **Everything else is protected** via `auth.protect()` in `(protected)/layout.tsx`
- `proxy.ts` runs `clerkMiddleware()` for session hydration only — no deprecated `createRouteMatcher`
- **Organizations are enabled** (Membership required mode). After sign-in, users without an active org are routed to `/choose-organization` before reaching the app.

---

## Running locally

```bash
npm install
npm run dev
```

Create `.env.local` with your Clerk keys:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
```

---

## Adding UI components

```bash
npx shadcn@latest add <component-name>
```

Components are placed in `components/ui/`.

---

## Progress log

Each change is documented as a small file in [`progress/`](./progress/):

| File | What happened |
|---|---|
| [01-project-scaffold](./progress/01-project-scaffold.md) | Next.js + shadcn/ui base setup |
| [02-claude-md-symlink](./progress/02-claude-md-symlink.md) | CLAUDE.md symlinked to AGENTS.md |
| [03-sonner-toast](./progress/03-sonner-toast.md) | Toast notifications wired up |
| [04-clerk-auth](./progress/04-clerk-auth.md) | Full Clerk authentication added |
| [05-layout-cleanup-and-route-protection](./progress/05-layout-cleanup-and-route-protection.md) | Root layout cleaned up, protected-first middleware |
| [06-remove-create-route-matcher](./progress/06-remove-create-route-matcher.md) | Removed deprecated `createRouteMatcher`, auth checks moved to resource level |
| [07-page-cleanup-and-auth-route-group](./progress/07-page-cleanup-and-auth-route-group.md) | Homepage stripped to `<UserButton />`, sign-in/sign-up moved under `(auth)` route group |
| [08-homepage-protection](./progress/08-homepage-protection.md) | Homepage moved into `(protected)`, auth model finalised |
| [09-gitignore-agent-folders](./progress/09-gitignore-agent-folders.md) | `.agents/`, `.claude/`, `skills-lock.json` added to `.gitignore` |
| [10-clerk-organizations](./progress/10-clerk-organizations.md) | Orgs enabled via CLI, `choose-organization` session-task page added |
