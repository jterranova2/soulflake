# Soulflake rooms — catch-up through 2026-09-09

Shared brief for every room. Two layers:

1. **Live now** — what is actually in `index.html` / `Soulflake.html`.
2. **Said in chat, not landed** — keep these so the next carve does not thin them again.

Live: https://jterranova2.github.io/soulflake/  
Custom domain pointed: https://soulflake.justinterranova.com  
Repo: https://github.com/jterranova2/soulflake  
Drive: https://drive.google.com/drive/folders/1SJDEMUCLDrHchtkjCOQQYOP7fKDKEsZN

## Live now (canon as of 2026-09-09 morning)

1. Welcome (`index.html`) is first visit. Midnight / violet / frost. Snowfall. Frost Waltz by Kevin MacLeod. Sound **on by default**, quieter (~0.035 via Web Audio gain), 3-second fade in and out. Button glows when on. iPhone ignores element volume; gain node is required.
2. Welcome stays signed out. **Sign in is gone.** Carry a flake with **Export / Import**. Build your Flake just opens `Soulflake.html`.
3. Export: name the file first, password optional, then house-v1 cipher. File: `{name}.soulflake.json`. Decoder: `Soulflake-Export-Cipher.md`.
4. Import: house file, or locked file + password. Writes `soulflake.profiles.v1` and opens Me. Old `v: 1` password-only files still import.
5. Me (`Soulflake.html`) is the product. Named on-device profiles. Press the center after naming. Six arms. One question at a time. Climb out. Arm titles are clickable and brighter.
6. Chrome: **Navigation** (profile switcher) + tabs **Me · Insights · Finds · Others**. Last three are shells: “Not yet.” No shop. No compatibility %.
7. Storage: `soulflake.profiles.v1`. Old `soulflake.v1` migrates in. `sf-justin` ids are rewritten. No Justin preset. No Strategic Guardian. No type table.
8. Report tab from late 09-08 is not in the live nav. Its copy still belongs in Insights when that room is carved.
9. Not a medical, clinical, or hiring tool.

## Arm growth language (unchanged)

`frost` → `branching` → `forming` → `fine`  
Level from how many answers exist on that arm, not from a score.

## Said in chat / builder snapshot, still missing from live Me

Restore these on the next arm pass. Do not treat the short live banks as the intended banks.

- Taste grouped: Music / Film / Talk-night
- Extra taste chips: Joni Mitchell, Eddie Vedder, Scent of a Woman, Hereditary, Waking Life, Dead Poets Society, Ex Machina, Jordan Peterson, Sarah Silverman, Empty museum
- Bond item `want`: “I want more contact than the other person usually wants to give.”
- Values: Fairness vs Leverage; Freedom to leave vs Belonging
- Conflict late option: “Joke it off, bring it up later” (live is only “Joke it off”)
- Report as a real page (three cuts of the same answers), not only an Insights shell

Justin sample flake is **dev / export only**, never a default user on a phone:

- Taste: Lynch, The Matrix, Fight Club, Scent of a Woman, Hereditary, The Shins, Talking Heads, Nirvana, Queen, White Stripes, Alan Watts, Jordan Peterson, Sarah Silverman, Pesto, Hike that becomes a debate
- Traits: open 4, extra 4, cons 2, agree 2, neuro 2
- Bond: ending 2, chase 4, focus 3, want 2
- Conflict: late = Go quiet; heat = Leave and cool off
- Context: Christian, West Coast US

Test file on the site: `assets/Justin-Terranova.soulflake.json` (house-v1 + password layer).
