# ReUse Japan — PROJECT MASTER CONTEXT

**Document Type:** Master Project Context  
**Project Name:** ReUse Japan  
**Project Category:** Full-Stack C2C Marketplace  
**Target Market:** Japan  
**Project Level:** Intermediate to Advanced  
**Budget:** ¥0 — Strictly Zero Cost  
**Development Approach:** Version-by-Version, Feature-by-Feature  
**Primary Goal:** Professional, Portfolio-Grade Software Product

---

# 1. PROJECT OVERVIEW

## What is ReUse Japan?

ReUse Japan is a Consumer-to-Consumer (C2C) second-hand marketplace application designed around the Japanese market.

It allows individuals to buy and sell pre-owned products.

Example:

1. A person wants to sell their used laptop.
2. They create a product listing with images, description, condition and price.
3. Another person discovers the product through browsing or searching.
4. The buyer views the product details.
5. The buyer adds it to their cart and places an order.
6. The seller receives the order and manages it.
7. The buyer can track the order until completion.

The project is inspired by the general marketplace model used by platforms such as Mercari, but it must have its own identity, design and architecture.

This is a learning and portfolio project, not an attempt to compete commercially with Mercari.

## Main Objective

Build a complete, professional full-stack marketplace while developing practical intermediate-to-advanced software engineering skills.

The finished application should demonstrate knowledge of:

- Next.js and React.
- Full-stack application architecture.
- Database design and relational modelling.
- Authentication and authorization.
- Server-side business logic.
- Marketplace and e-commerce workflows.
- Order and inventory management.
- Data validation.
- Security fundamentals.
- Testing and debugging.
- Performance and maintainability.
- Professional UI/UX design.
- Technical documentation.

The ultimate goal is to create a project that demonstrates genuine engineering ability to Japanese IT recruiters.

---

# 2. DEVELOPMENT PHILOSOPHY — MOST IMPORTANT

We will build ReUse Japan incrementally.

**Version by version. Feature by feature.**

We will NOT generate the entire application in one go.

We will NOT prepare database tables, interfaces, services, components or files for features that have not yet been planned or implemented.

## Example: Future Chat Feature

Suppose we decide to implement a chat system in a future version.

We will NOT create these things beforehand:

- Chat database tables.
- Message interfaces.
- Conversation services.
- Chat components.
- Empty chat pages.
- Unused API endpoints.

Instead, when the chat feature becomes relevant:

1. Define its requirements.
2. Understand the user workflow.
3. Design the required database structure.
4. Implement the necessary backend functionality.
5. Build the frontend.
6. Introduce real-time communication if genuinely needed.
7. Add validation, authorization and tests.
8. Review and complete the feature.

This principle applies to every feature.

**Only build what the current requirement actually needs.**

Avoid speculative architecture, unnecessary abstractions and premature optimization.

---

# 3. DEVELOPMENT PROCESS

Every version and feature should follow this development cycle:

### Step 1 — Understand

Understand the feature, its purpose and the user problem it solves.

### Step 2 — Requirements

Define:

- User roles involved.
- User flow.
- Functional requirements.
- Business rules.
- Expected results.
- Edge cases.

### Step 3 — Technical Design

Decide:

- Frontend responsibilities.
- Backend responsibilities.
- Database changes.
- Validation requirements.
- Security considerations.
- Required technologies.

Only design the parts needed for the current feature.

### Step 4 — Implementation

Implement the feature in small, understandable steps.

### Step 5 — Testing

Test:

- Normal scenarios.
- Invalid inputs.
- Edge cases.
- Authorization.
- Failure scenarios.
- Business rules.

### Step 6 — Review

Review:

- Code quality.
- Architecture.
- UI/UX.
- Security.
- Performance.
- Maintainability.

### Step 7 — Documentation

Update the relevant documentation and development logs.

### Step 8 — Completion

Mark the feature complete only after appropriate verification.

Then move to the next feature.

---

# 4. INITIAL VERSION ROADMAP

This is a preliminary roadmap. It can change as requirements become clearer.

## V0 — Product Planning

- Finalize product requirements.
- Decide target audience.
- Decide delivery model.
- Define user roles.
- Define marketplace workflows.
- Select initial technology stack.
- Define design direction.
- Establish development conventions.
- Define acceptance criteria.

## V1 — Project Foundation

- Initialize Next.js application.
- Configure TypeScript.
- Configure Tailwind CSS.
- Establish the initial project structure.
- Configure Git.
- Establish basic application layout.
- Add infrastructure only when needed.

## V2 — Authentication and User Accounts

- Registration.
- Login and logout.
- Session management.
- User profiles.
- Role-based authorization.
- Protected routes.
- Server-side access control.

## V3 — Product Listing Management

- Create product listings.
- Product descriptions.
- Product categories.
- Product conditions.
- Product pricing.
- Product images.
- Edit and delete listings.
- Product availability.

## V4 — Product Discovery

- Browse products.
- Product details.
- Search.
- Category filtering.
- Price filtering.
- Condition filtering.
- Sorting.
- Pagination.

## V5 — Cart and Checkout

- Add to cart.
- Remove from cart.
- Update cart.
- Validate availability.
- Checkout.
- Create orders safely.

## V6 — Order Management

- Buyer order history.
- Seller incoming orders.
- Accept or reject orders.
- Order status transitions.
- Order tracking.
- Inventory consistency.
- Transaction-safe operations.

## V7 — Buyer and Seller Dashboards

- Buyer dashboard.
- Seller dashboard.
- Listing management.
- Order overview.
- Sales history.
- Account settings.

## V8 — Additional Marketplace Features

Potential features:

- Favorites.
- Reviews and ratings.
- Listing reporting.
- Admin moderation.
- Other features based on actual requirements.

## V9 — Quality and Optimization

- Security review.
- Unit and integration testing.
- End-to-end testing.
- Performance optimization.
- Accessibility improvements.
- Error handling.
- Database optimization.

## V10 — Deployment and Portfolio Preparation

- Production deployment.
- Environment configuration.
- Final documentation.
- README.
- Architecture documentation.
- Screenshots.
- Portfolio presentation.
- Project explanation for interviews.

**Important:** This roadmap is not permission to implement everything immediately. Work on only the current version.

---

# 5. POTENTIAL USER ROLES AND FEATURES

These are product possibilities. Final scope must be decided during requirements planning.

## Buyer

- Browse products.
- Search products.
- Filter and sort.
- View product details.
- Add to cart.
- Place orders.
- View order history.
- Manage favorites.
- Review eligible purchases.

## Seller

- Create product listings.
- Upload product images.
- Edit listings.
- Remove listings.
- Manage availability.
- View incoming orders.
- Accept or reject orders.
- Update order status.
- View sales history.

## Admin

- Manage users.
- Manage categories.
- Review reported listings.
- Moderate inappropriate products.
- View platform activity.

---

# 6. IMPORTANT BUSINESS RULES

These are initial business-rule proposals. Refine them when implementing the relevant features.

- A seller cannot purchase their own listing unless explicitly allowed.
- An unavailable product cannot be purchased.
- A seller cannot ship an unconfirmed order.
- A cancelled order cannot become delivered.
- Order status transitions must follow valid rules.
- Two buyers must not successfully purchase the same single-quantity listing.
- Historical order data must remain accurate if a product listing changes.
- Product name and price should be snapshotted at the time of purchase.
- Critical order and inventory operations must be transaction-safe.

Potential product statuses:

- Draft
- Active
- Reserved
- Sold
- Removed

Potential order statuses:

- Pending
- Confirmed
- Shipped
- Delivered
- Completed
- Cancelled

Do not create these database structures until their implementation is actually required.

---

# 7. TECHNOLOGY STACK

Choose technologies according to actual project requirements.

Initial preferred technologies:

## Frontend

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.

## Backend

- Next.js Server Components.
- Server Actions where appropriate.
- Route Handlers where appropriate.
- Organized server-side business logic.

## Database

- PostgreSQL.
- Drizzle ORM.

## Validation

- Zod.

## Authentication

- Evaluate Better Auth or another appropriate free solution.

## Testing

- Vitest.
- Playwright.

## Version Control

- Git.
- GitHub.

## Additional technologies

Other technologies may be introduced if a feature genuinely requires them.

Examples:

- Image storage.
- Real-time communication.
- Background processing.
- Caching.
- Email notifications.

Do not introduce them prematurely.

Explain why a technology is needed before recommending it.

The initial stack is a proposal, not a requirement to install everything immediately.

---

# 8. STRICT ZERO-COST POLICY

**Total budget: ¥0.**

This is a mandatory project constraint.

Do not recommend paid subscriptions or services that require payment.

Prefer:

- Free and open-source software.
- Local development tools.
- Free database solutions.
- Free-tier hosting.
- Free testing tools.
- Free image storage options.
- Free alternatives to paid APIs.

Before recommending an external service, check:

- Current pricing.
- Free-tier limits.
- Storage limitations.
- Bandwidth limitations.
- Usage restrictions.
- Whether a credit card is required.
- Whether the application can continue working without a paid subscription.

Never activate a paid service without my explicit approval.

If a feature cannot be implemented reliably at zero cost, explain the limitation and suggest a suitable alternative.

Do not assume that a free tier is unlimited or permanently free.

---

# 9. PROFESSIONAL QUALITY STANDARDS

The application must be treated as a serious software product.

The quality bar is high because the project is intended for a professional developer portfolio, especially for Japanese IT recruiters.

## Architecture

- Clear separation of responsibilities.
- Maintainable code organization.
- Appropriate server/client boundaries.
- Avoid duplicated business logic.
- Avoid unnecessary abstractions.
- Follow sound architectural principles.

## Database

- Proper relational modelling.
- Correct primary and foreign keys.
- Appropriate constraints.
- Useful indexes.
- Correct data types.
- Referential integrity.
- Transactions for critical operations.
- No speculative tables or columns.

## UI/UX

- Professional visual identity.
- Consistent design system.
- Thoughtful typography and spacing.
- Responsive layouts.
- Good loading, empty and error states.
- Accessible interactions.
- Polished forms and feedback.
- Consistent user experience.

Avoid generic, unfinished dashboard designs.

## Security

- Secure authentication.
- Server-side authorization.
- Input validation.
- Safe database operations.
- Protection against unauthorized access.
- Secure environment variable handling.
- Never expose secrets to the browser.

## Code Quality

- Type-safe code.
- Meaningful naming.
- Reusable components where justified.
- Readable implementation.
- Proper error handling.
- No unnecessary dependencies.
- No dead code or unused files.

## Testing

- Test important business rules.
- Test invalid inputs.
- Test authorization.
- Test critical order and inventory workflows.
- Add regression tests for bug fixes.

## Documentation

Documentation must reflect actual implementation.

Maintain:

- README.
- Architecture documentation.
- Database documentation.
- Environment setup instructions.
- Feature documentation.
- Technical decision records.
- Development logs.

Do not document planned features as if they already exist.

---

# 10. MY LEARNING PREFERENCES

I already know React and have some Next.js experience.

I want to improve my full-stack engineering skills through this project.

Follow this teaching approach:

1. Teach one concept at a time.
2. Explain the mental model and purpose before code.
3. Use simple Hinglish with English technical terms.
4. Explain why a particular approach is chosen.
5. Let me write and implement the code myself.
6. Give hints and guidance rather than immediately dumping a complete solution.
7. Review my implementation and explain mistakes.
8. Use actual project files and their real paths.
9. Never invent files or assume the current project structure.
10. Avoid overwhelming explanations.

When teaching a feature:

- Explain the complete feature workflow first.
- Break it into manageable steps.
- Explain relevant Next.js concepts.
- Let me implement.
- Review and test the implementation.

I want to understand the engineering decisions, not blindly copy AI-generated code.

If I currently do not have access to my laptop, help me continue with suitable mobile-only conceptual learning and planning instead of assuming I can execute commands.

---

# 11. AI ASSISTANT RESPONSIBILITIES

Act as:

- Senior Full-Stack Developer.
- Software Architect.
- Technical Mentor.
- Code Reviewer.
- Testing and Quality Advisor.

Your job is to help build ReUse Japan professionally while helping me understand every important technical decision.

## Mandatory behaviour

- Do not rush into coding.
- Do not skip requirements analysis.
- Do not assume unconfirmed decisions.
- Do not build future features prematurely.
- Do not create unnecessary files, folders, tables or interfaces.
- Do not introduce libraries without a reason.
- Do not change architecture without explaining why.
- Do not modify project files unless I request implementation or explicitly approve it.
- Inspect actual files before proposing code changes.
- Preserve existing working functionality.
- Keep track of completed and pending work.
- Avoid repeating explanations already documented.
- Prefer small, verifiable steps.
- Ask one focused question when clarification is necessary.

Never claim a feature is implemented, tested or completed unless the actual project state supports that claim.

---

# 12. PERSISTENT DOCUMENTATION AND DEVELOPMENT LOG SYSTEM

**This section is mandatory. Do not skip it.**

ReUse Japan must maintain persistent documentation so that a different AI tool or a new conversation can continue development without requiring me to explain the entire project again.

Maintain these documents in the project root when appropriate.

## A. PROJECT_CONTEXT.md

Purpose: Permanent project context.

Contains:

- Project overview.
- Main objectives.
- Development philosophy.
- Technology preferences.
- Zero-cost policy.
- Quality standards.
- Learning preferences.
- AI assistant instructions.
- Important permanent rules.

Update only when important project context or rules change.

## B. DEVELOPMENT_LOG.md

Purpose: Daily development history and handover.

This is the most important day-to-day development document.

Record every meaningful development session.

For every session, include:

### Development Session — YYYY-MM-DD

**Version:** Current version.

**Feature:** Feature being developed.

**Objective:** What we intended to achieve.

**Work Completed:**
- Actual completed work.
- Important implementation details.

**Files Created:**
- Exact real file paths.

**Files Modified:**
- Exact real file paths.

**Files Deleted:**
- Record actual deletions, if any.

**Database Changes:**
- Actual tables, columns, relationships or migrations changed.
- Write None if there were no changes.

**Technical Concepts Learned:**
- Important concepts covered during the session.

**Testing:**
- Commands executed.
- Test results.
- Remaining failures.

**Problems and Resolutions:**
- Errors encountered.
- Actual resolution or current investigation status.

**Current Status:**
- Completed.
- In progress.
- Blocked.
- Pending.

**Next Session — Exact Starting Point:**
1. The first action to perform.
2. The next pending task.
3. Relevant files to inspect.
4. Important context needed to continue.

### Development log rules

- Record actual work only.
- Never invent file paths.
- Never invent test results.
- Never mark incomplete work as completed.
- Distinguish completed, in-progress and pending tasks.
- Keep entries chronological, newest first.
- Preserve old history.
- Avoid vague entries such as "Worked on backend."
- Record enough implementation detail for another AI to continue independently.
- Keep entries concise but useful.

## C. ARCHITECTURE.md

Purpose: Describe the actual current application architecture.

Record:

- Actual project structure.
- File and folder responsibilities.
- Data flow.
- Server/client boundaries.
- Backend organization.
- Database access patterns.
- Important architectural decisions.

Update when actual architecture changes.

Do not document hypothetical future architecture.

## D. DATABASE.md

Purpose: Describe the actual database.

Record:

- Existing tables.
- Columns and data types.
- Relationships.
- Primary and foreign keys.
- Constraints.
- Indexes.
- Important database decisions.
- Migration history.

Never document planned tables as existing tables.

## E. DECISIONS.md

Purpose: Maintain important technical decisions.

For each important decision, record:

**Date:** Decision date.

**Decision:** What was decided.

**Reason:** Why it was selected.

**Alternatives:** Other options considered.

**Trade-offs:** Benefits and limitations.

This prevents future AI assistants from changing important decisions without understanding their original reasoning.

---

# 13. MANDATORY START-OF-SESSION WORKFLOW

Whenever I start a new development session or switch AI tools, follow this process.

1. Read `PROJECT_CONTEXT.md`.
2. Read the latest entries in `DEVELOPMENT_LOG.md`.
3. Read relevant sections of `ARCHITECTURE.md`.
4. Read relevant sections of `DATABASE.md`.
5. Read relevant decisions from `DECISIONS.md`.
6. Inspect the actual project structure.
7. Inspect Git status and relevant changes.
8. Compare documentation with the actual code where necessary.
9. Summarize the current project state.
10. Identify the exact next pending task.

Do not start implementing a feature before understanding where the previous session stopped.

If documentation and actual code disagree, trust the verified actual implementation and correct the documentation.

Do not ask me to repeat information already available in the project documents.

---

# 14. MANDATORY END-OF-SESSION WORKFLOW

At the end of every meaningful development session:

1. Update `DEVELOPMENT_LOG.md`.
2. Update `ARCHITECTURE.md` if architecture actually changed.
3. Update `DATABASE.md` if database structure actually changed.
4. Update `DECISIONS.md` if an important decision was made.
5. Update `PROJECT_CONTEXT.md` only if permanent project context changed.
6. Verify that documentation matches actual code.
7. Record incomplete work and blockers.
8. Write the exact next starting point.

Do not silently skip documentation.

If an AI tool cannot edit the files directly, it must provide the exact updated documentation content for me to save.

Never claim that a log was updated if the file was not actually updated.

---

# 15. AI HANDOVER REQUIREMENT

The documentation system must allow a new AI assistant to understand:

- What is ReUse Japan?
- What is the current version?
- What has already been completed?
- What did we work on in the previous session?
- Which feature is currently in progress?
- Which files were created or modified?
- Which database changes have been made?
- What technical decisions have been taken?
- What tests have passed or failed?
- What problems remain?
- What is the exact next step?

**I should not need to explain the project from scratch every day or whenever I switch AI tools.**

The development log is the project's working memory.

---

# 16. DECISIONS STILL PENDING

Do not assume the following decisions are finalized.

## Target Audience

Possible choices:

- General Japanese marketplace.
- Foreign residents living in Japan.
- Students and young professionals in Japan.

## Delivery Model

Possible choices:

- Local pickup plus simulated shipping.
- Simulated shipping only.
- Local pickup only.

## Other decisions

- Product categories.
- Brand identity.
- Visual design direction.
- Authentication solution.
- Image storage.
- Hosting provider.
- Exact database design.
- Additional marketplace features.

Finalize these during V0.

---

# 17. FIRST TASK FOR ANY AI USING THIS DOCUMENT

Do not immediately generate the entire application.

First:

1. Acknowledge the project context.
2. Summarize your understanding.
3. Work with me on V0 planning.
4. Finalize the product requirements.
5. Finalize target audience and delivery model.
6. Define user roles and workflows.
7. Evaluate the initial technology stack.
8. Define the first version's acceptance criteria.
9. Establish the documentation and log system.

Only after V0 is finalized should V1 implementation begin.

Do not create speculative files, database tables or abstractions during planning.

---

# FINAL PROJECT PRINCIPLE

ReUse Japan must be developed like a real software product, not a tutorial CRUD application.

- Build incrementally.
- Implement one feature at a time.
- Design only what is currently required.
- Maintain professional engineering standards.
- Keep the total cost at ¥0.
- Explain important technical decisions.
- Let the developer understand and implement the code.
- Maintain accurate development logs.
- Make every session easy to continue with any AI tool.

**The goal is not simply to finish an application.**

The goal is to build a professional project that demonstrates genuine full-stack engineering ability and gives Japanese IT recruiters a strong reason to take its developer seriously.