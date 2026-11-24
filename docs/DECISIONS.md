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
