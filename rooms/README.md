# Soulflake rooms — catch-up through 2026-09-09 evening

Shared brief for every room. Two layers:

1. **Live now** — what is actually in `index.html` / `Soulflake.html` tonight.
2. **Said in chat, not landed** — keep these so the next carve does not thin them again.

Live: https://jterranova2.github.io/soulflake/  
Custom domain: https://soulflake.justinterranova.com  
Repo: https://github.com/jterranova2/soulflake  
Drive: https://drive.google.com/drive/folders/1SJDEMUCLDrHchtkjCOQQYOP7fKDKEsZN

## Live now (canon as of 2026-09-09 night)

Layer 0. Welcome only. Root homepage is Welcome. `Soulflake.html` is the same Welcome page, not the flake yet. Kill the split: one mood, one word, one button.

1. Midnight / violet / frost. Snowfall. Wordmark **Soulflake**. Crystal mark (`assets/Soulflake-Welcome-Crystal.jpg`, fallback `assets/soulflake-mark-v6.png`).
2. Headline: **Meet your Soulflake**.
3. Six rotating briefing lines (6s, fade):
   - Know yourself. Then be known.
   - See yourself clearly enough to be met.
   - The closer you get to you, the closer you can get to anyone.
   - First an honest picture. Then a real room.
   - You can’t be found if you can’t be named.
   - Depth with yourself. Then depth with someone else.
4. Button copy is **Get started** (not Build your Flake). Hero + bottom. Handlers are not wired yet — Layer 0 stopped at Welcome.
5. Scroll pitch, CEO order, frames 80–83:
   - The hole — You walk in blurry. Most people are guessing.
   - Six cuts, not a type — Traits. Taste. Bond. Values. Conflict. Context.
   - It grows when you tell it — lopsided on purpose.
   - Built to be used — Know yourself. Then be known. No score. Glue, grind, repair.
   Cue: Start with one arm.
6. Sound: Frost Waltz, autoplay + first-gesture retry. Level **0.18**. Fade **2s**. Gain node for iPhone. Persist `soulflake.sound`. Off stays off. Button glows when on.
7. **No nav.** Never print **Me** or **Others** on the page. Insights and Finds are off the site. No Export / Import dock. No Sign in.
8. Frame files: `index.html` points at root `80-welcome-hole.jpg` … `83-welcome-together.jpg`. `Soulflake.html` points at `GrokBot-Handoff/style-frames/80…`. Those JPEGs are still missing from the tree (text stub for 80 was removed). Copy is canon; images are not shipped.
9. Not a medical, clinical, or hiring tool.

## Public names (from chat / commits after the morning brief)

When chrome comes back, the words on the page are:

**Welcome · My flake · Together**

- Never **Me**. Never **Others**.
- Insights and Finds stay later-rooms, not tabs.
- Report lives inside Insights when that room is carved.

Internal file names (`rooms/home.md`, `rooms/others.md`) stay so old links do not break. Public copy uses My flake / Together.

## Arm growth language (unchanged)

`frost` → `branching` → `forming` → `fine`  
Level from how many answers exist on that arm, not from a score. No percents on the flake.

My flake camera (designed today, not live tonight): tap an arm, slow zoom into that sector on the same page. Center or Back zooms out. Empty stays frost.

## Said in chat / builder snapshot, still missing from live

Restore on the next carve. Do not treat Layer 0 Welcome as the whole product.

- My flake itself (named on-device profiles, six arms, one question at a time)
- Taste grouped: Music / Film / Talk-night
- Extra taste chips: Joni Mitchell, Eddie Vedder, Scent of a Woman, Hereditary, Waking Life, Dead Poets Society, Ex Machina, Jordan Peterson, Sarah Silverman, Empty museum
- Bond item `want`: “I want more contact than the other person usually wants to give.”
- Values: Fairness vs Leverage; Freedom to leave vs Belonging
- Conflict late option: “Joke it off, bring it up later”
- Export / Import (carry a flake, no account) — not a Welcome dock
- Together (compare later, no compatibility %)
- Report as a real Insights interior (three cuts of the same answers)
- Get started wired to the flake
- Real JPEGs for frames 80–83 (and 70–74 arm zoom)

Justin sample flake is **dev / export only**, never a default user on a phone:

- Taste: Lynch, The Matrix, Fight Club, Scent of a Woman, Hereditary, The Shins, Talking Heads, Nirvana, Queen, White Stripes, Alan Watts, Jordan Peterson, Sarah Silverman, Pesto, Hike that becomes a debate
- Traits: open 4, extra 4, cons 2, agree 2, neuro 2
- Bond: ending 2, chase 4, focus 3, want 2
- Conflict: late = Go quiet; heat = Leave and cool off
- Context: Christian, West Coast US

Test file on the site: `assets/Justin-Terranova.soulflake.json` (house-v1 + password layer).
