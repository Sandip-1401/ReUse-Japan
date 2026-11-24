# ReUse Japan — CURRENT APPLICATION ARCHITECTURE

> **Rule:** This document only reflects the *current actual* architecture, not speculative future code.

---

## 1. High-Level Overview
- **Application Name:** ReUse Japan (`reuse-japan`)
- **Framework:** Next.js 16 (App Router with Turbopack)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL (Neon Serverless, Asia Tokyo `ap-northeast-1`)
- **ORM:** Drizzle ORM
- **Auth Engine:** Better Auth (Server instance: `src/lib/auth.ts`, Route: `src/app/api/auth/[...all]/route.ts`)
- **Git Workflow:** Feature Branch Workflow (`feature/v2-authentication`)

---

## 2. Directory Structure (Current State)
```text
D:\ReUse-Japan\
├── docs\                     # Persistent project documentation & context
│   ├── PROJECT_MASTER_CONTEXT.md
│   ├── PROJECT_CONTEXT.md
│   ├── DECISIONS.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   └── DEVELOPMENT_LOG.md
├── public\                   # Static assets
├── src\
│   ├── app\                  # Next.js App Router root
│   │   ├── api\
│   │   │   └── auth\
│   │   │       └── [...all]\
│   │   │           └── route.ts   # Better Auth Catch-All API Handler
│   │   ├── favicon.ico
│   │   ├── globals.css       # Tailwind CSS v4 directives
│   │   ├── layout.tsx        # Root layout & ReUse Japan metadata
│   │   └── page.tsx          # V1 baseline landing view
│   ├── db\                   # Database layer
│   │   ├── schema\
│   │   │   ├── auth.ts       # Auth tables (user, session, account, verification)
│   │   │   └── index.ts      # Schema barrel export
│   │   └── index.ts          # Drizzle client instance (Neon HTTP driver)
│   └── lib\                  # Shared utilities & configurations
│       └── auth.ts           # Better Auth server configuration
├── .env.local                # Local environment secrets (DATABASE_URL, BETTER_AUTH_SECRET)
├── .gitignore
├── drizzle.config.ts         # Drizzle CLI configuration
├── eslint.config.mjs
├── next.config.ts
├── package.json              # Dependencies: drizzle-orm, @neondatabase/serverless, better-auth
└── tsconfig.json
```

---

## 3. Server / Client Boundaries
- `src/lib/auth.ts`: Server-only authentication engine (handles hashing, tokens, DB writes).
- `src/app/api/auth/[...all]/route.ts`: Server Route Handler exposing auth endpoints.
- Client auth client (`src/lib/auth-client.ts`) pending next step for browser-side interactions.

---

## 4. Backend & Data Layer Status
- **PostgreSQL Database:** Live on Neon Tokyo Cloud.
- **Tables Synced:** `user`, `session`, `account`, `verification`.
- **API Endpoints:** Live under `/api/auth/*` (handled by Better Auth).
