# Soulflake

An evolving, user-controlled personal model — self-understanding that accumulates from what you tell it, rather than resetting with every quiz or conversation. Live coming-soon page: [soulflake.com](https://www.soulflake.com).

## Status (2026-09-18)

This repo is a clean start for the real build. It previously held ~9 months of iterative front-end prototyping (Grok-assisted, built around an earlier "six arm" design) — that work is preserved in full on the `legacy/grok-prototype-2026-09` branch for design/historical reference, but none of it reflects the current architecture and it should not be built on directly (it's compiled output, not source; the actual app source lived in Grok's own app-builder tool, not in this repo).

The project is currently in a **research phase, not a build phase**. Before any production code gets written, the Personal Model's candidate dimensions need real validation with User #0 (Justin) — see decisions below.

## Where the real planning lives

The canonical product/architecture context is **not** in this repo yet — it lives in:
- A Google Drive "Soulflake Repository" (ID-based spec docs: Concept & Principles, Personal Model Specification, Output Requirements Catalog, Measurement & Learning, Testing & Validation, Repository Control) — built out during a ChatGPT-assisted planning phase, and the most rigorous/reliable of the pre-Claude planning material.
- A Claude Project ("Soulflake") holding a source map of that Drive material and a running decisions log, made directly with Claude.

Ask Justin for access to both if you're picking this project up fresh.

## Decisions locked so far (made with Claude, 2026-09-18)

- **V1 scope**: self-insight only — build the Personal Model, surface a "Living About Me" output, let the user inspect the evidence behind it. Compare/Chemistry (comparing two people's models) is explicitly deferred to post-v1.
- **Personal Model dimensions**: 10 candidate dimensions (Personality, Motivation, Values, Interests & Taste, Capabilities, Behavior, Context & State, Goals & Direction, Narrative Identity, Evidence & Feedback). Justin chose to fully design, test, and validate all 10 with real User #0 answers before any production code is written — this is a real research phase, not just a schema decision. 5 of the 10 already have completed, accepted test results from the earlier ChatGPT-assisted work; the other 5 still need question design and testing.
- **Backend**: Supabase (Postgres + auth). A new user starts with an anonymous session — no signup required — which already persists real evidence in Postgres from their first answer. They claim an account (email/OAuth) later only if they want cross-device access or to invite someone to Compare. (Open edge case, not yet decided: merging two separate anonymous sessions, e.g. laptop + phone, before either is claimed.)
- **AI interpretation caching**: outputs like Living About Me are cached and only regenerated when new evidence meaningfully changes the underlying model — not recomputed on every view.
- **Build model**: Claude Code implements the codebase; Justin reviews and directs rather than co-writing code.

## What's actually in this repo right now

Just the live coming-soon page (`index.html`, `assets/site.css`, `assets/home.js`, `assets/sound.js`, `assets/welcome-flake.svg`, plus audio/favicon/share-image assets) and this README. Nothing else — the real app doesn't exist yet.
