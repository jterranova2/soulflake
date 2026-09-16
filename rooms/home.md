# Room: Home / My flake

**Public name:** My flake. Never Me on the page.
**Live files:** `index.html` (shell) + `assets/view-me.html` + nucleus-beat SVGs.
**Live tonight:** four seat beats + a zoomed nucleus from locked beats 1 / 2 / 5 / 8. Not the six-arm camera.

Get started on About, the My flake nav item, hash `#me`, or `soulflake.started=1` runs `showMe()` and fetches `assets/view-me.html`.

## Live seat flow (09-15)

Storage keys: `soulflake.started`, `soulflake.seat` (0–4), `soulflake.name`, `soulflake.gender`, `soulflake.age`, `soulflake.place`.

1. Name. “What should we call you?” / “Name the flake.” / “That’s me.” Empty name cannot Save. Skip is still drawn and writes `skipped`. Title becomes **Hello {name}**.
2. How do you show up? Woman / Man / Another way. Skip ok.
3. How old are you? 13–120. Skip ok.
4. Where are you these days? Hint: “City and country. Skip is fine.” Placeholder: City, country.

Seat 0 with no typed name shows `?` in `#me-mark`. Nucleus hidden. Typing a name (or a stored name) hides the mark and shows beat 1 immediately.

Nucleus files are **not** `nucleus-1`…`nucleus-4`. Live map:

| seat | file | stage class | img scale |
|---|---|---|---|
| 0, no name | (hidden) | `.z0` | — |
| 0, name typed or 1 | `nucleus-beat-1.svg` | `.z1` | 8 |
| 2 | `nucleus-beat-2.svg` | `.z2` | 10 |
| 3 | `nucleus-beat-5.svg` | `.z5` | 6.2 |
| 4 | `nucleus-beat-8.svg` | `.z8` | 4.8 |

Stage size matches About: `min(300px, 78vw)`. The img is 400×400 and the stage crops + scales it.

After seat 4 the ask hides and the line reads `{name} · seat lit`.

Reset in the dots menu wipes the seat and returns to About.

Export / Import show here and stay disabled.

## When carved further

Named on-device profiles. Press the center after naming. Six arms. One question at a time. Climb out. Arm titles clickable and brighter.

Tap an arm: slow camera zoom into that sector on the same page. Center or Back zooms out. States: frost / forming / fine only. No percents. Tonight’s nucleus-beat zoom is the empty-center beat, not the camera.

Chrome when Together returns: **About · My flake · Together**. Insights and Finds stay off chrome.

Storage still intended: `soulflake.profiles.v1`. Old `soulflake.v1` migrates in. `sf-justin` ids rewritten. No Justin preset. No Strategic Guardian. No type table. The 09-14/09-15 seat keys are a thin on-device start, not that profile object yet.
