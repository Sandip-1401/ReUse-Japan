# ReUse Japan — PROJECT CONTEXT

**Project Name:** ReUse Japan  
**Project Category:** C2C Second-Hand Marketplace (Japan-focused)  
**Budget:** Strictly ¥0 (Zero Cost)  
**Base Currency:** Japanese Yen (¥ / JPY)  
**Current Version:** V0 (Planning completed, transitioning to V1)  

---

## 1. Project Vision & Goals
ReUse Japan is a portfolio-grade Consumer-to-Consumer (C2C) marketplace inspired by Japanese e-commerce platforms like Mercari, but designed with an independent architecture, modern code standards, and complete transparency.

The primary objective is to showcase professional full-stack software engineering abilities to Japanese IT recruiters, demonstrating:
- Next.js (App Router) and React architecture.
- Transaction-safe relational database design with PostgreSQL & Drizzle ORM.
- Server-side business logic and security.
- End-to-end e-commerce workflows (order lifecycle, inventory management, status transitions).
- Zero-cost, high-efficiency architecture.

---

## 2. Core Decisions (V0 Finalized)
1. **Target Audience:**
   - Primary: Anyone living in Japan (Japanese citizens, expats, foreign residents, and students).
   - Global Accessibility: Clear internationalization/English-friendly UI so global recruiters can test smoothly.
   - Base Currency: Japanese Yen (`¥` / JPY).

2. **Delivery Model:**
   - **Hybrid Model**: Supports both **Simulated Shipping** (tracking numbers, delivery addresses) and **Local Pickup** (station/public meetup coordination).

3. **User Account Model:**
   - **Unified / Single Account Model**: Every authenticated user can act as both a Buyer and a Seller. Internal Admin role reserved for platform moderation.

4. **Zero-Cost Policy (¥0 Budget):**
   - Strictly free & open-source tools.
   - Local development using local PostgreSQL / zero-cost free cloud DB (e.g. Neon free tier).
   - Local filesystem for file/image uploads during development (`public/uploads`), avoiding paid storage.
   - Zero-cost deployment and hosting.

---

## 3. Engineering & Learning Rules
- **No Speculative Code:** Never create tables, models, interfaces, or endpoints before the specific feature version requires them.
- **Deep Understanding ("Kyu, Kaha, Kaise, Kya"):** Every file, function, and architecture decision must be understood before writing.
- **User Control:** The developer writes/edits code and runs terminal commands directly. AI guides, mentors, explains, and reviews.
- **Git & GitHub Discipline:** Frequent commits, clean commit messages, and synchronized branches.
