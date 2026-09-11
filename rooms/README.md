# Soulflake rooms — catch-up through 2026-09-10 night

Shared brief for every room. Two layers:

1. **Live now** — what is actually in `index.html` / `Soulflake.html` tonight.
2. **Said in chat, not landed** — keep these so the next carve does not thin them again.

Live: https://jterranova2.github.io/soulflake/  
Custom domain: https://soulflake.justinterranova.com  
Repo: https://github.com/jterranova2/soulflake  
Drive: https://drive.google.com/drive/folders/1SJDEMUCLDrHchtkjCOQQYOP7fKDKEsZN

## Live now (canon as of 2026-09-10 night / 2026-09-11 early UTC)

Layer 0 plus a thin Get started stub. Root homepage is Welcome. `Soulflake.html` is the same Welcome page. Kill the split: one mood, one word, one button — until Get started flips the same page into a frost My flake.

1. Midnight / violet / frost. Snowfall (slower than the morning page). Wordmark **Soul** frost `#F8FAFC`, **flake** cyan `#67E8F9`. Hero is a live six-color dendrite SVG, not a crystal JPEG. Size `min(288px, 74.4vw)` (20% larger than the 09-09 mark).
2. Headline: **Meet your Soulflake**.
3. Six rotating briefing lines (first change at 7s, then every 11.5s, 1.5s fade each way):
   - Know yourself. Then be known.
   - See yourself clearly enough to be met.
   - The closer you get to you, the closer you can get to anyone.
   - First an honest picture. Then a real room.
   - You can’t be found if you can’t be named.
   - Depth with yourself. Then depth with someone else.
4. Button copy is **Get started**, weight 500. Hero + bottom. Click runs `showMe()`: `body.me` + `.hero-flake.me`, headline becomes **My flake**, pitch / cue / rotate / bottom hide, bands g1–g5 drop, only g0 frost spines stay. No questions, no profiles, no arm zoom yet.
5. Scroll pitch, CEO order. Frames 80–83 JPEGs are gone. Each block is an inline SVG on the midnight field:
   - The hole — You walk in blurry. Most people are guessing.
   - Six cuts, not a type — Traits. Taste. Bond. Values. Conflict. Context.
   - It grows when you tell it — lopsided on purpose.
   - Built to be used — Know yourself. Then be known. No score. Glue, grind, repair.
   Cue: Start with one arm.
6. Sound: `assets/audio/AUDIO-welcome.mp3` only. Frost Waltz file deleted. On by default unless `soulflake.sound` is `off`. Element volume 1. Gain node **2.2**. First-gesture unlock if autoplay is blocked. Off stays off. Button glows when on.
7. Atmosphere that stayed: moonlight-white rays with a hint of cyan (opacity cut 25% from the first ray pass), fog, vignette, breath, ground frost. Atmosphere that was tried and killed: ice ring, glint sweep, halo.
8. Hero flake motion: arm-g0…g5 grow/ease, spin-bands 51.2s, spin-crystal reverse 76.8s, draw-on then bloom. `prefers-reduced-motion` kills motion, fog, breath, snow.
9. Arm hues on the drawing: cyan `#67E8F9`, violet `#A78BFA`, blue `#93C5FD`, graphite `#94A3B8`, lavender `#C4B5FD`, frost `#E2E8F0`. Bond / Values sit in the violet–lavender pair.
10. **No nav.** Never print **Me** or **Others** on the page. Insights and Finds are off the site. No Export / Import dock. No Sign in.
11. Not a medical, clinical, or hiring tool.

## Public names (unchanged)

When chrome comes back, the words on the page are:

**Welcome · My flake · Together**

- Never **Me**. Never **Others**.
- Insights and Finds stay later-rooms, not tabs.
- Report lives inside Insights when that room is carved.

Internal file names (`rooms/home.md`, `rooms/others.md`) stay so old links do not break. Public copy uses My flake / Together.

## Arm growth language (unchanged)

`frost` → `branching` → `forming` → `fine`  
Level from how many answers exist on that arm, not from a score. No percents on the flake.

My flake camera (designed 09-09, not live tonight): tap an arm, slow zoom into that sector on the same page. Center or Back zooms out. Empty stays frost. Tonight Get started only shows g0 frost spines.

## Said in chat / builder snapshot, still missing from live

Restore on the next carve. Do not treat Layer 0 Welcome + the g0 stub as the whole product.

- My flake itself (named on-device profiles, six arms, one question at a time)
- Taste grouped: Music / Film / Talk-night
- Extra taste chips: Joni Mitchell, Eddie Vedder, Scent of a Woman, Hereditary, Waking Life, Dead Poets Society, Ex Machina, Jordan Peterson, Sarah Silverman, Empty museum
- Bond item `want`: “I want more contact than the other person usually wants to give.”
- Values: Fairness vs Leverage; Freedom to leave vs Belonging
- Conflict late option: “Joke it off, bring it up later”
- Export / Import (carry a flake, no account) — not a Welcome dock
- Together (compare later, no compatibility %)
- Report as a real Insights interior (three cuts of the same answers)
- Get started wired past the g0 stub into a real first question
- Real JPEGs for frames 80–83 are no longer required; inline SVGs are the pitch. Arm-zoom frames 70–74 still not drawn.

Tried on 09-10 and discarded: commercial JPEGs `IMG-commercial-1-4`, ice ring, glint sweep, halo, Web Audio mute-at-zero, Frost Waltz as the Welcome bed.

Justin sample flake is **dev / export only**, never a default user on a phone:

- Taste: Lynch, The Matrix, Fight Club, Scent of a Woman, Hereditary, The Shins, Talking Heads, Nirvana, Queen, White Stripes, Alan Watts, Jordan Peterson, Sarah Silverman, Pesto, Hike that becomes a debate
- Traits: open 4, extra 4, cons 2, agree 2, neuro 2
- Bond: ending 2, chase 4, focus 3, want 2
- Conflict: late = Go quiet; heat = Leave and cool off
- Context: Christian, West Coast US

Test file on the site: `assets/Justin-Terranova.soulflake.json` (house-v1 + password layer).
