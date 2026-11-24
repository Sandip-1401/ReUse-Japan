# ReUse Japan — CURRENT APPLICATION ARCHITECTURE

> **Rule:** This document only reflects the *current actual* architecture, not speculative future code.

---

## 1. High-Level Overview
- **Application Name:** ReUse Japan (`reuse-japan`)
- **Framework:** Next.js 16 (App Router with Turbopack)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Git Workflow:** Feature Branch Workflow (GitHub Flow) with stable `main`

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
├── public\                   # Static assets (favicons)
│   └── (boilerplate SVGs removed)
├── src\
│   └── app\                  # Next.js App Router root
│       ├── favicon.ico
│       ├── globals.css       # Tailwind CSS v4 directives & font declarations
│       ├── layout.tsx        # Semantic root layout & ReUse Japan metadata
│       └── page.tsx          # Clean V1 baseline landing view
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json              # Package name: reuse-japan
└── tsconfig.json
```

---

## 3. Server / Client Boundaries
- All pages remain default React Server Components (RSC).
- No client components (`"use client"`) introduced yet (no client-side interactivity required for V1 foundation).

---

## 4. Backend & Data Layer Status
- No backend endpoints, server actions, or database connections configured yet.
- Ready for V2 (Authentication & User Accounts with PostgreSQL / Drizzle ORM).
