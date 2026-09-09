# Room: Welcome

**Live file:** `index.html`
**Job:** First visit. Mood, not product chrome. Signed out on purpose.

## Must be true (live)

- Title: Soulflake — Welcome
- Line: Meet your Soul Flake
- Sub: A profile so precise it feels invasive — and clear enough to act on.
- Primary: Build your Flake → opens `Soulflake.html` (does not write a profile by itself)
- Secondary: Export / Import (Sign in was dropped 2026-09-09)
- Micro: Welcome stays signed out. Carry a flake with Export / Import.
- Sound on by default. Frost Waltz at ~0.035 through a Web Audio gain node. 3s fade in/out. Button glows when on. Preference in `localStorage.soulflake.sound` (`on` / `off`).
- Attribution in footer: Frost Waltz, Kevin MacLeod, CC BY 3.0
- Prototype · not a medical, clinical, or hiring tool
- Mark: `assets/soulflake-mark-v6.png`, unstretched, 1:1, float
- CNAME: `soulflake.justinterranova.com` (pointed again 2026-09-09 after a temporary github.io-only stretch so phones got HTTPS)

## Export / Import dock

- Export needs a flake on this phone (`soulflake.profiles.v1` or leftover `soulflake.v1`). Else: “Nothing on this phone to export.”
- Name the file first. Password optional. Then house-v1 cipher. See `rooms/export.md` and `Soulflake-Export-Cipher.md`.
- Import accepts `.soulflake.json` with `kind: soulflake-profile`. Locked files need the password. House-only files continue with no password.

## Do not put back

A Sign in button that pretends there is an account. There is no account. The flake lives on the phone or in a named export.
