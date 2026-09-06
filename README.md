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
  layout.tsx              # Root shell — ClerkProvider, ThemeProvider, Toaster
  page.tsx                # Home (protected, redirects to sign-in if unauthenticated)
  sign-in/[[...sign-in]]/ # Clerk sign-in page (public)
  sign-up/[[...sign-up]]/ # Clerk sign-up page (public)
  (protected)/
    layout.tsx            # Server-side auth guard (auth.protect())
    dashboard/page.tsx    # Main dashboard after sign-in

components/
  ui/                     # shadcn/ui component library (~50 components)
  theme-provider.tsx      # Dark/light mode provider

proxy.ts                  # Clerk middleware — protected-first routing
lib/utils.ts              # cn() utility
```

---

## Auth & routing

- **Public routes:** `/sign-in`, `/sign-up` only
- **Everything else is protected.** The Clerk middleware (`proxy.ts`) intercepts every request and redirects unauthenticated users to sign-in.
- The `(protected)` route group adds a second server-side guard via `auth.protect()` for extra safety.

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
