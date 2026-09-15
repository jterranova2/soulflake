# Soulflake rooms — catch-up through 2026-09-14 night

Shared brief for every room. Two layers:

1. **Live now** — what is actually in `index.html` tonight.
2. **Said in chat, not landed** — keep these so the next carve does not thin them again.

Checked 2026-09-14 night PDT against `main` at `dd78e2e`. Last room stamp was 09-13 night (`278609ff`, trippy-1 hero). No 09-14 Grok transcript was available to this agent beyond the catch-up request. Source of truth was live `index.html` plus the 09-14 commit log. Nothing from a missing thread was invented.

Live: https://jterranova2.github.io/soulflake/  
Custom domain: https://soulflake.justinterranova.com  
Repo: https://github.com/jterranova2/soulflake  
Drive: https://drive.google.com/drive/folders/1SJDEMUCLDrHchtkjCOQQYOP7fKDKEsZN

## Live now (canon as of 2026-09-14 night PDT)

Root `index.html` is the live page. Two views on one file: **About** (hash `#about` / `#welcome`) and **My flake** (`#me`). Started users (`soulflake.started=1`) land on My flake. `Soulflake.html` is still a leftover older Welcome and is **not** in lockstep. Do not copy `Soulflake.html` forward.

### Chrome

1. Sticky glass header at 50% Midnight (`rgba(7,11,20,.5)` + blur 12px).
2. Wordmark **Soul** frost `#F8FAFC`, **flake** cyan `#67E8F9`. Click returns to About.
3. Center nav: **About** · **My flake**. Never print **Welcome**, **Me**, or **Others** on the page. About is the public name for the old Welcome brochure.
4. Right tools: bare sound note `♪` and a vertical-dots menu. Bigger icons (52px). No plate behind them. No slash when sound is off — off is graphite + lower opacity.
5. Dots menu: About, My flake, Reset, Export (disabled), Import (disabled).
6. Reset clears `soulflake.started`, `soulflake.seat`, name / gender / age / place, and returns to About.

### About (brochure)

1. Midnight / violet / frost. Snowfall. Three tight moonlight shafts. Ground frost.
2. Hero drawing is `assets/welcome-flake.svg` fetched into `#hero-stage`. Size still `min(415px, 96vw)`. CSS on the live page: `.spin-bands` CW 70s, `.spin-crystal` CCW 56s, core wash 7s. Do not treat the 09-13 inline-ring timings as current unless that SVG is opened and they still match.
3. Headline: **Meet your Soulflake**.
4. Four rotating lines (thinned from six on 09-14). First fade-in ~1.6s. Hold 7s, fade 1.8s, gap 1.4s.
   - Know thyself, then be known.
   - The unexamined life is not worth living.
   - Become who you truly are. -- Jung
   - If I am not for myself, who will be? -- Hillel
5. Button copy is **Get started**, weight 500. Hero + bottom. Click runs `showMe()`.
6. Commercial is one click-through: arrows + dots. Text left, image right on desktop; stack on small screens. SVGs `commercial-center`, `commercial-six`, `commercial-grows`, `commercial-together`.
   - The center — Every flake starts here. / Six directions. No answers yet.
   - Six cuts, not a type — Traits. Taste. Bond. Values. Conflict. Context.
   - It grows when you tell it — Skip what you want. Lopsided is honest.
   - Built to be used — No score. Glue, grind, repair.
7. Vision speech lives in `assets/welcome-vision.html` and is fetched into `.vision`. Fancy Instrument Serif center lines. Last line: Meet your Soulflake. Know thyself, and then be known.
8. Share tags: `og:title` Soulflake, `og:description` Know thyself, and then be known., image `https://soulflake.justinterranova.com/assets/share-og.png`.
9. Sound: `assets/audio/index-Frozen-Star.mp3` only. On unless `soulflake.sound` is `off`. First-gesture / pointer on the note. Off stays off across refresh.
10. Insights and Finds stay off the site. No Sign in. Not a medical, clinical, or hiring tool.

### My flake (started)

1. Brochure pitch / vision / rotate / Get started hide. Welcome hero hides. Square seed `assets/nucleus-N.svg` at the same `min(415px, 96vw)` width.
2. Four seat beats. Name is required (no Skip on beat 0). Title becomes **Hello {name}** after the name is saved, else **My flake**.
   - 0 `soulflake.name` — What should we call you? / Name the flake. / That’s me
   - 1 `soulflake.gender` — How do you show up? Woman / Man / Another way. Skip ok.
   - 2 `soulflake.age` — How old are you? 13–120. Skip ok.
   - 3 `soulflake.place` — Where are you these days? City. Skip ok.
3. `soulflake.seat` is 0–4. Nucleus hidden until seat ≥ 1, then `nucleus-1` … `nucleus-4`. After seat 4 the ask hides, body gets `.seated`, and a graphite line reads `{name} · seat lit`.
4. Export / Import buttons show on My flake and stay gray / disabled. Same in the dots menu.
5. No six arms. No arm zoom. No Taste / Traits / Bond / Values / Conflict questions. Context faith list is not this seat flow.

## Public names

Words on the page tonight: **About · My flake**

When Together returns, the set is **About · My flake · Together**.

- Never **Me**. Never **Others**. Never print **Welcome** as a nav label (About replaced it on 09-14).
- Insights and Finds stay later-rooms, not tabs.
- Report lives inside Insights when that room is carved.

Internal file names (`rooms/welcome.md`, `rooms/home.md`, `rooms/others.md`) stay so old links do not break.

## Arm growth language (unchanged)

`frost` → `branching` → `forming` → `fine`  
Level from how many answers exist on that arm, not from a score. No percents on the flake.

My flake camera (designed 09-09, not live tonight): tap an arm, slow zoom into that sector on the same page. Center or Back zooms out. Empty stays frost. Tonight My flake is the four seat beats + growing frost-point nucleus, not the camera.

## Said in chat / builder snapshot, still missing from live

Restore on the next carve. Do not treat About + four seat beats as the whole product.

- My flake six arms and one-question-at-a-time climb
- Taste grouped: Music / Film / Talk-night
- Extra taste chips: Joni Mitchell, Eddie Vedder, Scent of a Woman, Hereditary, Waking Life, Dead Poets Society, Ex Machina, Jordan Peterson, Sarah Silverman, Empty museum
- Bond item `want`: “I want more contact than the other person usually wants to give.”
- Values: Fairness vs Leverage; Freedom to leave vs Belonging
- Conflict late option: “Joke it off, bring it up later”
- Context faith + rough-place list (seat city is not that list)
- Working Export / Import (carry a flake, no account) — chrome is there, wired gray
- Together (compare later, no compatibility %)
- Report as a real Insights interior (three cuts of the same answers)
- Arm-zoom frames 70–74 still not drawn
- `Soulflake.html` brought back into lockstep with `index.html`
- Six-quote marquee (09-14 live page only keeps four lines)

Tried on 09-10 and discarded: commercial JPEGs `IMG-commercial-1-4`, ice ring, glint sweep, halo, Web Audio mute-at-zero, Frost Waltz as the Welcome bed.

Tried on 09-11 and discarded: fog, vignette oval, breath glow, slop (unattributed) marquee, grow-by-stages-then-peel flake motion, `AUDIO-welcome.mp3` / `welcome-8.mp3` as the bed.

Tried on 09-14 and discarded / walked back: share-card smash of the homepage; emptied loading stubs while restoring Welcome; sound-off slash overlay; plated icon buttons. Several mid-day commits blanked or thinned About and were immediately restored. Do not treat those stubs as a direction.

09-13 night: first “ship trippy-1” commit briefly emptied `index.html`; restore put Welcome back. Hero drawing then moved to the fetched `welcome-flake.svg` on 09-14.

Justin sample flake is **dev / export only**, never a default user on a phone:

- Taste: Lynch, The Matrix, Fight Club, Scent of a Woman, Hereditary, The Shins, Talking Heads, Nirvana, Queen, White Stripes, Alan Watts, Jordan Peterson, Sarah Silverman, Pesto, Hike that becomes a debate
- Traits: open 4, extra 4, cons 2, agree 2, neuro 2
- Bond: ending 2, chase 4, focus 3, want 2
- Conflict: late = Go quiet; heat = Leave and cool off
- Context: Christian, West Coast US

Test file on the site: `assets/Justin-Terranova.soulflake.json` (house-v1 + password layer).
