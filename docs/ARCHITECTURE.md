# ReUse Japan — CURRENT APPLICATION ARCHITECTURE

> **Rule:** This document only reflects the *current actual* architecture, not speculative future code.

---

## 1. High-Level Overview
- **Framework:** Next.js (App Router, currently Next 16)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4

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
├── public\                   # Static assets (favicons, svgs)
├── src\
│   └── app\                  # Next.js App Router root
│       ├── favicon.ico
│       ├── globals.css       # Tailwind CSS v4 directives
│       ├── layout.tsx        # Root HTML layout
│       └── page.tsx          # Initial home page (Next.js boilerplate)
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. Server / Client Boundaries
- Currently all pages remain default Server Components where applicable.
- No client components (`"use client"`) introduced yet.

---

## 4. Backend & Data Layer Status
- No backend endpoints, server actions, or database connections configured yet (V1 foundation pending).
