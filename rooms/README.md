# Soulflake rooms — catch-up through 2026-09-11 night

Shared brief for every room. Two layers:

1. **Live now** — what is actually in `index.html` / `Soulflake.html` tonight.
2. **Said in chat, not landed** — keep these so the next carve does not thin them again.

Live: https://jterranova2.github.io/soulflake/  
Custom domain: https://soulflake.justinterranova.com  
Repo: https://github.com/jterranova2/soulflake  
Drive: https://drive.google.com/drive/folders/1SJDEMUCLDrHchtkjCOQQYOP7fKDKEsZN

## Live now (canon as of 2026-09-11 night PDT)

Layer 0 Welcome, rebuilt as a magazine brochure. Root homepage is Welcome. `Soulflake.html` is the same Welcome page. One mood, one word, one button — until Get started flips the same page into a frost My flake.

1. Midnight / violet / frost. Snowfall (50% faster than the 09-10 night page). Wordmark **Soul** frost `#F8FAFC`, **flake** cyan `#67E8F9`. Hero is a live six-color dendrite SVG, not a crystal JPEG. Size `min(415px, 96vw)` (about +44% on top of the 09-09 mark; two +20% passes on 09-11).
2. Headline: **Meet your Soulflake**.
3. Six rotating attributed lines. First line fades in after 1.8s. Hold 7s, fade 1.8s, gap 1.4s, then swap. Wait full fade-out before the next line.
   - Know thyself, and then be known.
   - The unexamined life is not worth living. -- Socrates
   - He who knows others is wise; he who knows himself is enlightened. -- Lao Tzu
   - We don't see things as they are, we see them as we are. -- Anais Nin
   - The privilege of a lifetime is to become who you truly are. -- Jung
   - If I am not for myself, who will be for me? -- Hillel
4. Button copy is **Get started**, weight 500. Hero + bottom. Click runs `showMe()`: `body.me` + `.hero-flake.me`, headline becomes **My flake**, pitch / cue / rotate / bottom hide, bands g1–g5 drop, only g0 frost spines stay. No questions, no profiles, no arm zoom yet.
5. Scroll pitch is a zigzag magazine brochure. Hero flake stays put. Cards walk past it, even/odd sides flip. Moonbeam rays fade out once the hero is less than 35% on screen. Four blocks, CEO order, inline SVGs:
   - The center — Every flake starts here. Six directions. No answers yet. Until you tap the middle and tell it one true thing, there is nothing to match, compare, or act on.
   - Six cuts, not a type — Not another letter. Traits. Taste. Bond. Values. Conflict. Context.
   - It grows when you tell it — The more you say, the more it can say back. Lopsided on purpose.
   - Built to be used — Know yourself. Then be known. No score. Glue, grind, repair.
   Cue: Start with one arm.
6. Sound: `assets/audio/index-Frozen-Star.mp3` only. `AUDIO-welcome.mp3` and `welcome-8.mp3` deleted. On by default unless `soulflake.sound` is `off`. Element volume 1. Gain node **2.2**. Hook gain once — no stacked nodes across refresh. First-gesture unlock if autoplay is blocked. Off stays off across refresh. Button glows when on.
7. Atmosphere that stayed: three tight moonlight shafts (no dome wash), ground frost, snow. Atmosphere tried on 09-11 and killed: fog, vignette oval wash, breath glow behind the flake, ice ring, glint sweep, halo, magazine-without-zigzag, grow-then-peel flake (reverted to the last working loop).
8. Hero flake motion: starts at the hub so lace does not flash first. g0 holds; g1–g5 rise and peel on a 17.6s loop. spin-bands 51.2s, spin-crystal reverse 76.8s, draw-on then bloom. `prefers-reduced-motion` kills motion, rays shimmer, snow.
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

Tried on 09-11 and discarded: fog, vignette oval, breath glow, slop (unattributed) marquee, grow-by-stages-then-peel flake motion, `AUDIO-welcome.mp3` / `welcome-8.mp3` as the bed.

Justin sample flake is **dev / export only**, never a default user on a phone:

- Taste: Lynch, The Matrix, Fight Club, Scent of a Woman, Hereditary, The Shins, Talking Heads, Nirvana, Queen, White Stripes, Alan Watts, Jordan Peterson, Sarah Silverman, Pesto, Hike that becomes a debate
- Traits: open 4, extra 4, cons 2, agree 2, neuro 2
- Bond: ending 2, chase 4, focus 3, want 2
- Conflict: late = Go quiet; heat = Leave and cool off
- Context: Christian, West Coast US

Test file on the site: `assets/Justin-Terranova.soulflake.json` (house-v1 + password layer).
