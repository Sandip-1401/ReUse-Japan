# ReUse Japan — TECHNICAL & ARCHITECTURAL DECISIONS

This log preserves all major decisions, their rationale, alternatives considered, and trade-offs.

---

### Decision 001: Target Audience & Base Currency
- **Date:** 2026-11-23  
- **Decision:** Target anyone living in Japan (Japanese citizens, expats, students) with English-accessible UI and base currency as Japanese Yen (¥ / JPY).  
- **Reason:** Japan is the primary market context for Japanese IT recruiters, while English accessibility ensures recruiters or interviewers can easily navigate the app without language barriers.  
- **Alternatives Considered:** 
  - Pure Japanese-only (Too restrictive for international recruiters to demo easily).
  - Pure Expat-only (Narrows the marketplace concept).  
- **Trade-offs:** Needs clear currency formatting in JPY (no decimal places for standard Yen).

---

### Decision 002: Delivery Model — Hybrid (Simulated Shipping + Local Pickup)
- **Date:** 2026-11-23  
- **Decision:** Implement both Simulated Shipping (courier delivery workflow with tracking) and Local Pickup (meetup at public spot/station).  
- **Reason:** Demonstrates two distinct fulfillment lifecycles in the portfolio (parcel tracking status transitions vs. meetup confirmation status transitions).  
- **Alternatives Considered:**
  - Shipping only (misses out on realistic local community marketplace use cases like bulky furniture).
  - Pickup only (too limited for a modern e-commerce portfolio).  
- **Trade-offs:** Order fulfillment logic must account for two possible fulfillment paths.

---

### Decision 003: User Account Model — Unified Single Account
- **Date:** 2026-11-23  
- **Decision:** Use a Unified Single Account model where any authenticated user can both buy items and list items for sale.  
- **Reason:** Matches real-world C2C platforms (Mercari, Yahoo Flea Market, eBay, OLX). Eliminates cumbersome double-registration.  
- **Alternatives Considered:**
  - Separate buyer vs. seller account types (Unnatural for C2C marketplaces).  
- **Trade-offs:** Must enforce server-side business rules to prevent self-purchasing (`buyer_id != seller_id`).

---

### Decision 004: Technology Stack & Zero-Cost Tools
- **Date:** 2026-11-23  
- **Decision:** Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, PostgreSQL, Drizzle ORM, Zod, and local uploads / free-tier storage.  
- **Reason:** Modern, type-safe, industry-standard stack with zero recurring costs.  
- **Alternatives Considered:**
  - Prisma (Heavier binary footprint compared to lightweight SQL-like Drizzle ORM).
  - MongoDB (Relational integrity and transactions are critical for order/inventory safety in e-commerce).  
- **Trade-offs:** Relational schema requires careful migration management via Drizzle.

---

### Decision 005: Industry-Standard Git Branching (GitHub Flow)
- **Date:** 2026-11-24  
- **Decision:** Adopt a strict Feature Branch Workflow (GitHub Flow). The `main` branch remains protected/production-ready. Every feature or version iteration must be developed on a dedicated `feature/<name>` branch, built & verified with `npm run build`, and only then merged back into `main`.
- **Reason:** Simulates real-world software engineering discipline, protects production code from half-finished or broken states, and ensures clean commit history for portfolio inspection by tech recruiters.
- **Alternatives Considered:**
  - Direct commits to `main` (Amateur practice; risks broken builds and unvetted code).
  - Complex GitFlow (`develop`, `release`, `hotfix` branches) (Over-engineering for a single-developer learning portfolio).
- **Trade-offs:** Requires discipline of branching, testing, and merging for each discrete feature.

---

### Decision 006: Serverless PostgreSQL Database (Neon Tokyo Region)
- **Date:** 2026-11-25  
- **Decision:** Use Neon Serverless PostgreSQL hosted in Asia (Tokyo - `ap-northeast-1`) region with `@neondatabase/serverless` driver.
- **Reason:** 100% free tier (strictly complies with ¥0 budget constraint), zero local PostgreSQL service overhead, native connectionless HTTP querying (prevents pool exhaustion in Next.js Serverless runtime), and Tokyo region minimizes network latency for Japanese market workflows.
- **Alternatives Considered:**
  - Local PostgreSQL only (Works on local machine but cannot easily be demoed on live portfolio deployments).
  - Supabase (Heavier setup, Neon is lighter and dedicated directly to Postgres).
- **Trade-offs:** Requires internet connection during development to run Drizzle migrations/push.

---

### Decision 007: Authentication via Better Auth & Progressive Profiling (Approach B)
- **Date:** 2026-11-25  
- **Decision:** Use Better Auth as the core authentication engine with Drizzle adapter. Adopt Approach B (Progressive Profiling, Mercari standard): minimal registration friction (Name, Email, Password) while keeping Japan-specific delivery/pickup fields (`phone`, `postalCode`, `prefecture`, `city`, `addressLine`) nullable in `user` schema to be collected progressively at listing/checkout.
- **Reason:** High signup conversion, matches modern Japanese C2C marketplaces (Mercari, Rakuma), and Better Auth provides full type safety, built-in password hashing (scrypt/argon2), and seamless support for Google OAuth.
- **Alternatives Considered:**
  - Heavy Upfront Signup (Approach A) (High drop-off rate; asking for full postal address before user even browses).
  - NextAuth / Auth.js (More complex configuration and breaking changes across versions).
- **Trade-offs:** Checkout and listing creation workflows must validate that required shipping/pickup profile fields are completed before finalizing transactions.

---

### Decision 008: `shadcn/ui` (`base-nova`), `react-hook-form` + `zod`, and `(auth)` Route Group
- **Date:** 2026-11-27  
- **Decision:** Adopt `shadcn/ui` v4 (`style: "base-nova"` backed by `@base-ui/react`) with `lucide-react` icons for accessible UI primitives, `react-hook-form` + `@hookform/resolvers` + `zod` for schema-driven form validation, and Next.js `(auth)` Route Group with Server Component page wrappers + Client Component forms.  
- **Reason:** Industry-standard, zero-cost (¥0), accessible component primitives owned inside `src/components/ui/`, clean separation between Server Component session guards/metadata (`page.tsx`) and interactive form state (`components/auth/*`), and single-source-of-truth validation schemas in `src/lib/validations/auth.ts`.  
- **Alternatives Considered:**
  - Raw hand-styled Tailwind form elements (Inconsistent styling and higher maintenance overhead).
  - Heavy paid or monolithic component libraries (Unnecessary bundle bloat and reduced customization).  
- **Trade-offs:** `shadcn/ui` v4 `base-nova` uses `@base-ui/react` and the newer `Field` primitives instead of the legacy `form` primitive, requiring components to be installed incrementally as features need them.
