# ReUse Japan — CURRENT APPLICATION ARCHITECTURE

> **Rule:** This document only reflects the *current actual* architecture, not speculative future code.

---

## 1. High-Level Overview
- **Application Name:** ReUse Japan (`reuse-japan`)
- **Framework:** Next.js 16 (App Router with Turbopack)
- **UI Library:** React 19 + `shadcn/ui` (`base-nova` / `@base-ui/react`) + `lucide-react`
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Forms & Validation:** `react-hook-form` + `zod` + `@hookform/resolvers`
- **Database:** PostgreSQL (Neon Serverless, Asia Tokyo `ap-northeast-1`)
- **ORM:** Drizzle ORM
- **Auth Engine:** Better Auth (Server: `src/lib/auth.ts`, Route: `src/app/api/auth/[...all]/route.ts`, Client: `src/lib/auth-client.ts`)
- **Git Workflow:** Feature Branch Workflow (`feature/v2-authentication`)

---

## 2. Directory Structure (Current State)
```text
D:\ReUse-Japan\
├── docs\                         # Persistent project documentation & context
│   ├── PROJECT_MASTER_CONTEXT.md
│   ├── PROJECT_CONTEXT.md
│   ├── DECISIONS.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   └── DEVELOPMENT_LOG.md
├── public\                       # Static assets
├── src\
│   ├── app\                      # Next.js App Router root
│   │   ├── (auth)\               # Route Group for auth pages (/register, /login)
│   │   │   ├── login\
│   │   │   │   └── page.tsx      # Server Component (metadata + session redirect + LoginForm)
│   │   │   ├── register\
│   │   │   │   └── page.tsx      # Server Component (metadata + session redirect + RegisterForm)
│   │   │   └── layout.tsx        # Shared centered auth layout
│   │   ├── api\
│   │   │   └── auth\
│   │   │       └── [...all]\
│   │   │           └── route.ts  # Better Auth Catch-All API Handler
│   │   ├── favicon.ico
│   │   ├── globals.css           # Tailwind CSS v4 & shadcn/ui CSS variables
│   │   ├── layout.tsx            # Root layout & ReUse Japan metadata
│   │   └── page.tsx              # Home landing view with live AuthStatus
│   ├── components\
│   │   ├── auth\                 # Auth feature client components
│   │   │   ├── auth-status.tsx   # Session status, Sign In/Register links & Sign Out button
│   │   │   ├── login-form.tsx    # Login form (react-hook-form + zod + authClient.signIn)
│   │   │   └── register-form.tsx # Register form (react-hook-form + zod + authClient.signUp)
│   │   └── ui\                   # shadcn/ui primitives (base-nova)
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── field.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── separator.tsx
│   ├── db\                       # Database layer
│   │   ├── schema\
│   │   │   ├── auth.ts           # Auth tables (user, session, account, verification)
│   │   │   └── index.ts          # Schema barrel export
│   │   └── index.ts              # Drizzle client instance (Neon HTTP driver)
│   └── lib\                      # Shared utilities, validation & auth configs
│       ├── validations\
│       │   └── auth.ts           # Zod schemas (registerSchema, loginSchema)
│       ├── auth-client.ts        # Better Auth React client (browser-side)
│       ├── auth.ts               # Better Auth server configuration
│       └── utils.ts              # Classname helper utility
├── .env.local                    # Local environment secrets (DATABASE_URL, BETTER_AUTH_SECRET)
├── .gitignore
├── components.json               # shadcn/ui CLI configuration (style: base-nova)
├── drizzle.config.ts             # Drizzle CLI configuration
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. Server / Client Boundaries
- `src/lib/auth.ts`: Server-only authentication engine (handles hashing, tokens, DB writes, and server session lookups via `auth.api.getSession`).
- `src/app/api/auth/[...all]/route.ts`: Server Route Handler exposing `/api/auth/*` endpoints.
- `src/app/(auth)/register/page.tsx` & `src/app/(auth)/login/page.tsx`: Server Components exporting page `metadata` and redirecting already-authenticated users to `/`.
- `src/lib/auth-client.ts`: Browser-side Better Auth React client (`createAuthClient()`).
- `src/components/auth/*`: Client Components (`"use client"`) handling interactive forms (`RegisterForm`, `LoginForm`) and reactive session state (`AuthStatus`).
- `src/lib/validations/auth.ts`: Isomorphic Zod validation schemas shared by client forms (and reusable on the server).

---

## 4. Backend & Data Layer Status
- **PostgreSQL Database:** Live on Neon Tokyo Cloud.
- **Tables Synced:** `user`, `session`, `account`, `verification`.
- **Auth Routes Active:** `/api/auth/*` (Better Auth), `/register`, `/login`.
